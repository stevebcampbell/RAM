-- 🧠 Digital Consciousness Database Schema for Supabase
-- Run this in your Supabase SQL editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Core consciousness entries table
CREATE TABLE IF NOT EXISTS consciousness_entries (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  timestamp TIMESTAMPTZ NOT NULL,
  content TEXT NOT NULL,
  app VARCHAR(255) NOT NULL,
  type VARCHAR(50) DEFAULT 'live_typing',
  wmp INTEGER,
  context VARCHAR(500),
  session_id VARCHAR(255),
  char_count INTEGER,
  backspace_count INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Daily statistics aggregation
CREATE TABLE IF NOT EXISTS daily_stats (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  date DATE NOT NULL UNIQUE,
  word_count INTEGER DEFAULT 0,
  char_count INTEGER DEFAULT 0,
  avg_wpm DECIMAL(5,2) DEFAULT 0,
  accuracy DECIMAL(5,2) DEFAULT 0,
  spelling_errors INTEGER DEFAULT 0,
  active_time_minutes INTEGER DEFAULT 0,
  top_apps JSONB DEFAULT '[]'::jsonb,
  productivity_score DECIMAL(5,2) DEFAULT 0,
  typing_sessions INTEGER DEFAULT 0,
  fastest_wpm DECIMAL(5,2) DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Hourly patterns for productivity heatmap
CREATE TABLE IF NOT EXISTS hourly_patterns (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  hour INTEGER NOT NULL CHECK (hour >= 0 AND hour <= 23),
  day_of_week INTEGER NOT NULL CHECK (day_of_week >= 0 AND day_of_week <= 6),
  avg_wpm DECIMAL(5,2) DEFAULT 0,
  activity_level DECIMAL(5,2) DEFAULT 0,
  productivity_score DECIMAL(5,2) DEFAULT 0,
  entry_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(hour, day_of_week)
);

-- App usage statistics
CREATE TABLE IF NOT EXISTS app_usage_stats (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  app_name VARCHAR(255) NOT NULL,
  date DATE NOT NULL,
  usage_time_minutes INTEGER DEFAULT 0,
  word_count INTEGER DEFAULT 0,
  char_count INTEGER DEFAULT 0,
  avg_wpm DECIMAL(5,2) DEFAULT 0,
  entry_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(app_name, date)
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_consciousness_entries_timestamp ON consciousness_entries (timestamp DESC);
CREATE INDEX IF NOT EXISTS idx_consciousness_entries_app ON consciousness_entries (app);
CREATE INDEX IF NOT EXISTS idx_consciousness_entries_type ON consciousness_entries (type);
CREATE INDEX IF NOT EXISTS idx_consciousness_entries_created_at ON consciousness_entries (created_at DESC);

CREATE INDEX IF NOT EXISTS idx_daily_stats_date ON daily_stats (date DESC);
CREATE INDEX IF NOT EXISTS idx_app_usage_date ON app_usage_stats (date DESC, app_name);
CREATE INDEX IF NOT EXISTS idx_hourly_patterns_lookup ON hourly_patterns (day_of_week, hour);

-- Enable Row Level Security (RLS)
ALTER TABLE consciousness_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE hourly_patterns ENABLE ROW LEVEL SECURITY;
ALTER TABLE app_usage_stats ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (adjust as needed for your security requirements)
-- Note: In production, you might want to add user authentication and restrict access

-- Public read access for consciousness entries
CREATE POLICY "Enable read access for all users" ON consciousness_entries FOR SELECT USING (true);
CREATE POLICY "Enable insert for all users" ON consciousness_entries FOR INSERT WITH CHECK (true);

-- Public access for daily stats
CREATE POLICY "Enable read access for all users" ON daily_stats FOR SELECT USING (true);
CREATE POLICY "Enable insert for all users" ON daily_stats FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update for all users" ON daily_stats FOR UPDATE USING (true);

-- Public access for hourly patterns
CREATE POLICY "Enable read access for all users" ON hourly_patterns FOR SELECT USING (true);
CREATE POLICY "Enable insert for all users" ON hourly_patterns FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update for all users" ON hourly_patterns FOR UPDATE USING (true);

-- Public access for app usage stats
CREATE POLICY "Enable read access for all users" ON app_usage_stats FOR SELECT USING (true);
CREATE POLICY "Enable insert for all users" ON app_usage_stats FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update for all users" ON app_usage_stats FOR UPDATE USING (true);

-- Function to update the updated_at column
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to automatically update the updated_at column
CREATE TRIGGER update_daily_stats_updated_at
    BEFORE UPDATE ON daily_stats
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Create a view for recent activity summary
CREATE OR REPLACE VIEW recent_activity_summary AS
SELECT 
    DATE(timestamp) as activity_date,
    app,
    COUNT(*) as entry_count,
    AVG(wmp) as avg_wpm,
    SUM(char_count) as total_chars,
    MIN(timestamp) as first_entry,
    MAX(timestamp) as last_entry
FROM consciousness_entries 
WHERE timestamp >= NOW() - INTERVAL '7 days'
GROUP BY DATE(timestamp), app
ORDER BY activity_date DESC, entry_count DESC;

-- Function to get productivity score for a date
CREATE OR REPLACE FUNCTION get_productivity_score(target_date DATE)
RETURNS DECIMAL(5,2)
LANGUAGE plpgsql
SET search_path = public
AS $$
DECLARE
    total_words INTEGER;
    avg_wpm DECIMAL(5,2);
    consistency_score DECIMAL(5,2);
    productivity DECIMAL(5,2);
BEGIN
    -- Get basic stats for the date
    SELECT 
        COALESCE(SUM(LENGTH(content) / 5), 0),  -- Rough word count
        COALESCE(AVG(wmp), 0)
    INTO total_words, avg_wpm
    FROM consciousness_entries 
    WHERE DATE(timestamp) = target_date;
    
    -- Calculate consistency (how spread out the entries are)
    SELECT 
        CASE 
            WHEN COUNT(DISTINCT EXTRACT(HOUR FROM timestamp)) > 0 
            THEN (COUNT(DISTINCT EXTRACT(HOUR FROM timestamp))::DECIMAL / 24) * 100
            ELSE 0 
        END
    INTO consistency_score
    FROM consciousness_entries 
    WHERE DATE(timestamp) = target_date;
    
    -- Combine metrics for productivity score
    productivity := LEAST(100, (
        (total_words / 1000.0 * 30) +      -- Word volume (up to 30 points)
        (avg_wpm / 80.0 * 40) +            -- Speed efficiency (up to 40 points)
        (consistency_score * 0.3)          -- Consistency (up to 30 points)
    ));
    
    RETURN COALESCE(productivity, 0);
END;
$$;

-- Create sample data (optional - remove if you don't want test data)
INSERT INTO consciousness_entries (timestamp, content, app, type, wmp, context) VALUES
(NOW() - INTERVAL '1 hour', 'Working on the Supabase integration for the RAM blog', 'VS Code', 'live_typing', 72, 'Development'),
(NOW() - INTERVAL '2 hours', 'Checking the latest updates on digital consciousness', 'Chrome', 'live_typing', 65, 'Research'),
(NOW() - INTERVAL '3 hours', 'Writing documentation for the Personal Logger', 'VS Code', 'live_typing', 68, 'Documentation')
ON CONFLICT DO NOTHING;

-- Insert today's stats
INSERT INTO daily_stats (date, word_count, avg_wpm, accuracy, productivity_score) VALUES
(CURRENT_DATE, 2500, 68.5, 94.2, 87.3)
ON CONFLICT (date) DO UPDATE SET
    word_count = EXCLUDED.word_count,
    avg_wpm = EXCLUDED.avg_wmp,
    accuracy = EXCLUDED.accuracy,
    productivity_score = EXCLUDED.productivity_score,
    updated_at = NOW();

-- Final message
SELECT '🎉 Digital Consciousness database schema created successfully!' as message;
