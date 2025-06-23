import { createClient } from '@supabase/supabase-js';

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Check if Supabase is properly configured
const isSupabaseConfigured = () => {
  return (
    supabaseUrl !== 'https://placeholder.supabase.co' &&
    supabaseAnonKey !== 'placeholder-key' &&
    supabaseUrl.includes('.supabase.co')
  );
};

// Database types
export interface ConsciousnessEntry {
  id: string;
  timestamp: string;
  content: string;
  app: string;
  type: 'live_typing' | 'thought' | 'action';
  wpm?: number;
  context?: string;
  session_id?: string;
  char_count?: number;
  backspace_count?: number;
  created_at?: string;
}

export interface DailyStats {
  id: string;
  date: string;
  word_count: number;
  char_count: number;
  avg_wpm: number;
  accuracy: number;
  spelling_errors: number;
  active_time_minutes: number;
  top_apps: { name: string; usage: number; wpm: number }[];
  productivity_score: number;
  typing_sessions: number;
  fastest_wpm: number;
  created_at?: string;
}

export interface HourlyPattern {
  id: string;
  hour: number;
  day_of_week: number;
  avg_wpm: number;
  activity_level: number;
  productivity_score: number;
}

// Supabase functions
export const supabaseApi = {
  // Insert consciousness entry
  async insertEntry(entry: Omit<ConsciousnessEntry, 'id' | 'created_at'>) {
    const { data, error } = await supabase
      .from('consciousness_entries')
      .insert([entry])
      .select();

    if (error) throw error;
    return data[0];
  },

  // Get recent entries
  async getRecentEntries(limit = 50) {
    const { data, error } = await supabase
      .from('consciousness_entries')
      .select('*')
      .order('timestamp', { ascending: false })
      .limit(limit);

    if (error) throw error;
    return data;
  },

  // Insert or update daily stats
  async upsertDailyStats(stats: Omit<DailyStats, 'id' | 'created_at'>) {
    const { data, error } = await supabase
      .from('daily_stats')
      .upsert([stats], { onConflict: 'date' })
      .select();

    if (error) throw error;
    return data[0];
  },

  // Get daily stats
  async getDailyStats(days = 30) {
    const { data, error } = await supabase
      .from('daily_stats')
      .select('*')
      .order('date', { ascending: false })
      .limit(days);

    if (error) throw error;
    return data;
  },

  // Get today's stats
  async getTodayStats() {
    const today = new Date().toISOString().split('T')[0];
    const { data, error } = await supabase
      .from('daily_stats')
      .select('*')
      .eq('date', today)
      .single();

    if (error && error.code !== 'PGRST116') throw error;
    return data;
  },

  // Real-time subscription for live entries
  subscribeToEntries(callback: (entry: ConsciousnessEntry) => void) {
    return supabase
      .channel('consciousness_entries')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'consciousness_entries' },
        (payload) => callback(payload.new as ConsciousnessEntry)
      )
      .subscribe();
  },
};
