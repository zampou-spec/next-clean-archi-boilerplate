import { NextResponse } from 'next/server';
import { withAuth } from 'next-auth/middleware';

export default withAuth(
  (req) => {
    const role = req.nextauth.token?.role;
    if (req.nextUrl.pathname.startsWith('/dashboard/admin') && role !== 'admin') {
      return NextResponse.rewrite(new URL('/dashboard', req.url));
    }

    if (req.nextUrl.pathname.startsWith('/dashboard') && !(role === 'user' || role === 'admin')) {
      return NextResponse.rewrite(new URL("/auth/login?message=Vous n'êtes pas autorisé", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token
    }
  }
);

export const config = { matcher: ['/dashboard/:path*'] };
