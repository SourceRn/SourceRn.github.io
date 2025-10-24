
import { NextRequest, NextResponse } from 'next/server';

export const config = { matcher: ['/studio', '/studio/:path*'] };

export function middleware(req: NextRequest) {
  // En dev, si quieres saltarte el auth: return NextResponse.next();
  const auth = req.headers.get('authorization');
  if (auth) {
    const [scheme, encoded] = auth.split(' ');
    if (scheme === 'Basic' && encoded) {
      const [u, p] = Buffer.from(encoded, 'base64').toString().split(':');
      if (u === process.env.STUDIO_USER && p === process.env.STUDIO_PASS) {
        return NextResponse.next();
      }
    }
  }
  return new NextResponse('Authentication required.', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Secure Studio"' },
  });
}
