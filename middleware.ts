import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Allow ALL requests to pass through - no authentication required
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
