import { supabaseApi } from '@/lib/supabase';
import { NextRequest, NextResponse } from 'next/server';

// POST /api/stats - Receive daily stats from Personal Logger
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.date) {
      return NextResponse.json(
        { error: 'Missing required field: date' },
        { status: 400 }
      );
    }

    console.log('📊 Received daily stats for:', body.date);

    // Try to store in Supabase
    try {
      const stats = await supabaseApi.upsertDailyStats({
        date: body.date,
        word_count: body.word_count || 0,
        char_count: body.char_count || 0,
        avg_wpm: body.avg_wpm || 0,
        accuracy: body.accuracy || 0,
        spelling_errors: body.spelling_errors || 0,
        active_time_minutes: body.active_time_minutes || 0,
        top_apps: body.top_apps || [],
        productivity_score: body.productivity_score || 0,
        typing_sessions: body.typing_sessions || 0,
        fastest_wpm: body.fastest_wpm || 0,
      });

      console.log(`✅ Stored daily stats in Supabase for ${body.date}`);

      return NextResponse.json({
        success: true,
        id: stats.id,
        message: 'Daily stats stored successfully',
        source: 'supabase',
      });
    } catch (supabaseError) {
      console.warn('Supabase storage failed for daily stats:', supabaseError);

      return NextResponse.json({
        success: true,
        message: 'Daily stats received (Supabase not configured)',
        source: 'mock',
      });
    }
  } catch (error) {
    console.error('Error storing daily stats:', error);
    return NextResponse.json(
      { error: 'Failed to store daily stats' },
      { status: 500 }
    );
  }
}

// GET /api/stats - Get daily stats
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const days = parseInt(searchParams.get('days') || '30');
    const date = searchParams.get('date');

    try {
      if (date) {
        // Get specific date
        const stats = await supabaseApi.getDailyStats(1);
        return NextResponse.json({
          success: true,
          stats: stats.find((s) => s.date === date) || null,
          source: 'supabase',
        });
      } else {
        // Get multiple days
        const stats = await supabaseApi.getDailyStats(days);
        return NextResponse.json({
          success: true,
          stats: stats,
          count: stats.length,
          source: 'supabase',
        });
      }
    } catch (supabaseError) {
      console.warn('Supabase query failed, using mock data:', supabaseError);

      // Return mock data if Supabase fails
      return NextResponse.json({
        success: true,
        stats: [],
        count: 0,
        source: 'mock',
        note: 'Supabase not configured',
      });
    }
  } catch (error) {
    console.error('Error fetching daily stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch daily stats' },
      { status: 500 }
    );
  }
}
