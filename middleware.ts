import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Allow public access to API routes for consciousness data
  if (request.nextUrl.pathname.startsWith('/api/')) {
    return NextResponse.next();
  }
  
  // Allow public access to consciousness pages
  if (request.nextUrl.pathname.includes('consciousness')) {
    return NextResponse.next();
  }
  
  // Allow public access to static files
  if (request.nextUrl.pathname.includes('.json')) {
    return NextResponse.next();
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
