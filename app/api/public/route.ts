import { NextResponse } from 'next/server';

// This route is specifically designed to bypass authentication
export async function GET() {
  try {
    // Return basic system status without authentication
    const response = {
      success: true,
      message: 'Consciousness API is online',
      timestamp: new Date().toISOString(),
      status: 'public',
      data: {
        totalEntries: '~',
        todayEntries: '~',
        avgWpm: '~',
        activeHours: '~',
      },
      redirect: {
        dashboard: '/dashboard.html',
        hub: '/hub.html',
        livethoughts: '/live-consciousness.html',
      },
    };

    return NextResponse.json(response, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Cache-Control': 'no-cache',
        'x-vercel-skip-toolbar': '1',
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Server error',
        message: 'Public API endpoint error',
      },
      {
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'x-vercel-skip-toolbar': '1',
        },
      }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'x-vercel-skip-toolbar': '1',
    },
  });
}
