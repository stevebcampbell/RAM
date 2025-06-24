import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Allow ALL requests to pass through - no authentication required
  const response = NextResponse.next();
  
  // Add headers to bypass any protection
  response.headers.set('x-vercel-protection-bypass', 'jhwhgjernlkblrnbugfbdnwsfanirbgu');
  response.headers.set('x-vercel-skip-toolbar', '1');
  
  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
