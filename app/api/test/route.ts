import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'success',
    message: 'RAM Blog API is working!',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Mock response for now - in real implementation this would save to Supabase
    console.log('Received consciousness data:', body);
    
    return NextResponse.json({
      status: 'success',
      message: 'Consciousness data received',
      data: body,
      source: 'mock_mode',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return NextResponse.json(
      { 
        status: 'error', 
        message: 'Failed to process consciousness data',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 400 }
    );
  }
}
