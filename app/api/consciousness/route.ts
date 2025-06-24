import { supabaseApi } from '@/lib/supabase';
import { NextRequest, NextResponse } from 'next/server';

// Try to connect to local middleware first
const LOCAL_MIDDLEWARE_URL = 'http://localhost:8888/api/consciousness';

async function tryLocalMiddleware(limit: number = 50): Promise<any> {
  try {
    const response = await fetch(`${LOCAL_MIDDLEWARE_URL}?limit=${limit}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      signal: AbortSignal.timeout(2000), // 2 second timeout
    });
    
    if (response.ok) {
      const data = await response.json();
      console.log('✅ Connected to local PersonalLogger middleware');
      return {
        ...data,
        source: 'local_middleware',
        connection: 'direct_to_logger'
      };
    }
  } catch (error: any) {
    console.log('⚠️ Local middleware not available:', error?.message || 'Connection failed');
  }
  return null;
}

// Mock fallback data for development
const mockConsciousnessData = {
  recentEntries: [
    {
      id: '1',
      timestamp: new Date(),
      content: 'Working on integrating consciousness data with the RAM blog',
      app: 'VS Code',
      type: 'live_typing',
      wpm: 72,
      context: 'Development session',
    },
    {
      id: '2',
      timestamp: new Date(Date.now() - 300000),
      content:
        'Checking the latest updates on the digital consciousness dashboard',
      app: 'Chrome',
      type: 'live_typing',
      wpm: 65,
      context: 'Research',
    },
    {
      id: '3',
      timestamp: new Date(Date.now() - 600000),
      content: 'Hey, can we sync up on the project timeline?',
      app: 'Messages',
      type: 'live_typing',
      wpm: 58,
      context: 'Communication',
    },
  ],
  dailyStats: [
    {
      date: '2025-06-23',
      wordCount: 2847,
      avgWpm: 68,
      accuracy: 94.2,
      activeTime: 287,
      topApps: [
        { name: 'VS Code', usage: 45 },
        { name: 'Chrome', usage: 25 },
        { name: 'Messages', usage: 15 },
        { name: 'Terminal', usage: 10 },
        { name: 'Other', usage: 5 },
      ],
      productivity: 87,
    },
    {
      date: '2025-06-22',
      wordCount: 3156,
      avgWpm: 71,
      accuracy: 92.8,
      activeTime: 324,
      topApps: [
        { name: 'VS Code', usage: 52 },
        { name: 'Chrome', usage: 23 },
        { name: 'Messages', usage: 12 },
        { name: 'Terminal', usage: 8 },
        { name: 'Other', usage: 5 },
      ],
      productivity: 91,
    },
  ],
};

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '50');
    const app = searchParams.get('app') || 'all';

    // Allow public access for consciousness data
    console.log('📡 Consciousness API: GET request received');

    // 1. FIRST: Try to connect to local PersonalLogger middleware
    console.log('🧠 Attempting to connect to local PersonalLogger middleware...');
    const localData = await tryLocalMiddleware(limit);
    
    if (localData) {
      // Filter by app if specified
      if (app !== 'all' && localData.recentEntries) {
        localData.recentEntries = localData.recentEntries.filter(
          (entry: any) => entry.app === app
        );
      }
      
      console.log(`✅ Returning ${localData.recentEntries?.length || 0} entries from local middleware`);
      return NextResponse.json(localData);
    }

    // 2. FALLBACK: Try to get data from Supabase
    console.log('🔍 Local middleware unavailable, trying Supabase...');
    try {
      console.log('🔍 Attempting to connect to Supabase...');
      console.log('📍 Supabase URL configured:', !!process.env.NEXT_PUBLIC_SUPABASE_URL);
      console.log('🔑 Supabase Key configured:', !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
      
      let entries = await supabaseApi.getRecentEntries(limit);
      const dailyStats = await supabaseApi.getDailyStats(30);
      const todayStats = await supabaseApi.getTodayStats();

      // Filter by app if specified
      if (app !== 'all') {
        entries = entries.filter((entry) => entry.app === app);
      }

      console.log(`✅ Returning ${entries.length} entries from Supabase`);

      return NextResponse.json({
        recentEntries: entries,
        dailyStats: dailyStats,
        todayStats: todayStats,
        success: true,
        source: 'supabase',
      });
    } catch (supabaseError) {
      console.error('❌ Supabase error details:', supabaseError);
      console.warn('Supabase not available, using mock data:', supabaseError);

      // Fallback to mock data if Supabase isn't configured
      const filteredData = {
        ...mockConsciousnessData,
        recentEntries:
          app === 'all'
            ? mockConsciousnessData.recentEntries
            : mockConsciousnessData.recentEntries.filter(
                (entry) => entry.app === app
              ),
        success: true,
        source: 'mock',
      };

      console.log(
        `⚠️ Returning mock data (${filteredData.recentEntries.length} entries)`
      );
      return NextResponse.json(filteredData);
    }
  } catch (error) {
    console.error('Error fetching consciousness data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch consciousness data', success: false },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Allow public POST for consciousness data from Personal Logger
    console.log('📝 Consciousness API: POST request received');

    // Validate required fields
    if (!body.content || !body.timestamp || !body.app) {
      return NextResponse.json(
        {
          error: 'Missing required fields: content, timestamp, app',
          success: false,
        },
        { status: 400 }
      );
    }

    console.log('📝 Received consciousness data:', {
      app: body.app,
      content: body.content.substring(0, 50) + '...',
      wpm: body.wpm,
    });

    // Try to store in Supabase
    try {
      const entry = await supabaseApi.insertEntry({
        timestamp: body.timestamp,
        content: body.content,
        app: body.app,
        type: body.type || 'live_typing',
        wpm: body.wpm,
        context: body.context,
        session_id: body.session_id,
        char_count: body.char_count,
        backspace_count: body.backspace_count,
      });

      console.log(`✅ Stored in Supabase: ${body.content.substring(0, 30)}...`);

      return NextResponse.json({
        success: true,
        id: entry.id,
        message: 'Consciousness entry stored in Supabase',
        source: 'supabase',
      });
    } catch (supabaseError) {
      console.warn(
        'Supabase storage failed, continuing without persistence:',
        supabaseError
      );

      return NextResponse.json({
        success: true,
        id: Date.now().toString(),
        message: 'Consciousness data received (Supabase not configured)',
        source: 'mock',
        warning: 'Data not persisted - Supabase configuration needed',
      });
    }
  } catch (error) {
    console.error('Error processing consciousness data:', error);
    return NextResponse.json(
      { error: 'Failed to process consciousness data', success: false },
      { status: 500 }
    );
  }
}
