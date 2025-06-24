import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const days = parseInt(searchParams.get('days') || '7');
    const limit = parseInt(searchParams.get('limit') || '100');

    // Get recent consciousness entries
    const { data: entries, error } = await supabase
      .from('consciousness_entries')
      .select('*')
      .order('timestamp', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }

    // Process data for dashboard
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const daysAgo = new Date(today.getTime() - (days * 24 * 60 * 60 * 1000));

    const recentEntries = entries || [];
    const todayEntries = recentEntries.filter(entry => {
      const entryDate = new Date(entry.timestamp);
      return entryDate >= today;
    });

    const weekEntries = recentEntries.filter(entry => {
      const entryDate = new Date(entry.timestamp);
      return entryDate >= daysAgo;
    });

    // Calculate stats
    const stats = {
      today: {
        totalEntries: todayEntries.length,
        totalWords: todayEntries.reduce((sum, entry) => {
          return sum + (entry.content ? entry.content.split(' ').length : 0);
        }, 0),
        avgWpm: todayEntries.length > 0 
          ? Math.round(todayEntries.reduce((sum, entry) => sum + (entry.wpm || 0), 0) / todayEntries.length)
          : 0,
        activeHours: new Set(todayEntries.map(entry => 
          new Date(entry.timestamp).getHours()
        )).size,
      },
      week: {
        totalEntries: weekEntries.length,
        totalWords: weekEntries.reduce((sum, entry) => {
          return sum + (entry.content ? entry.content.split(' ').length : 0);
        }, 0),
        activeDays: new Set(weekEntries.map(entry => 
          new Date(entry.timestamp).toDateString()
        )).size,
      }
    };

    // App usage analysis
    const appUsage: { [key: string]: number } = {};
    todayEntries.forEach(entry => {
      const app = entry.app || 'Unknown';
      appUsage[app] = (appUsage[app] || 0) + 1;
    });

    // Hourly activity pattern
    const hourlyActivity = new Array(24).fill(0);
    todayEntries.forEach(entry => {
      const hour = new Date(entry.timestamp).getHours();
      hourlyActivity[hour]++;
    });

    // Content analysis
    const allText = todayEntries
      .map(e => e.content || '')
      .join(' ')
      .toLowerCase();
    
    const words = allText.split(/\s+/).filter(word => 
      word.length > 3 && 
      !['this', 'that', 'with', 'have', 'will', 'from', 'they', 'been', 'were', 'said', 'each', 'which', 'their'].includes(word)
    );

    const wordFreq: { [key: string]: number } = {};
    words.forEach(word => {
      wordFreq[word] = (wordFreq[word] || 0) + 1;
    });

    const topWords = Object.entries(wordFreq)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 20)
      .map(([word, count]) => ({ word, count }));

    // Daily summary
    const apps = Object.keys(appUsage);
    const topApp = apps.length > 0 ? apps.reduce((a, b) => appUsage[a] > appUsage[b] ? a : b) : "Unknown";
    
    const dailySummary = stats.today.totalEntries === 0 
      ? "No activity recorded today."
      : `Today you've been active across ${apps.length} applications, with most activity in ${topApp}. You've logged ${stats.today.totalWords} words of digital consciousness across ${stats.today.activeHours} active hours.`;

    return NextResponse.json({
      success: true,
      stats,
      entries: recentEntries.slice(0, 50), // Last 50 entries for timeline
      appUsage: Object.entries(appUsage)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 10)
        .map(([app, count]) => ({ app, count })),
      hourlyActivity,
      topWords,
      dailySummary,
      source: 'supabase',
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Dashboard API error:', error);
    return NextResponse.json({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}
