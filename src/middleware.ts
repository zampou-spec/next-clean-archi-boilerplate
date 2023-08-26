import { NextResponse } from 'next/server';
import { withAuth, NextRequestWithAuth } from 'next-auth/middleware';

// export const middleware = withAuth((req: NextRequestWithAuth) => {
//   const role = req.nextauth.token?.role;
//   const pathname = req.nextUrl.pathname;

//   console.log('middleware');

//   if (role && pathname.startsWith('/auth')) {
//     return NextResponse.rewrite(new URL('/dashboard', req.url));
//   }
// }, {});

export default withAuth(
  async (req: NextRequestWithAuth) => {
    const role = req.nextauth.token?.role;
    const pathname = req.nextUrl.pathname;

    if (pathname.startsWith('/dashboard/admin') && role !== 'admin') {
      return NextResponse.rewrite(new URL('/dashboard', req.url));
    }

    if (pathname.startsWith('/dashboard') && !(role === 'user' || role === 'admin')) {
      return NextResponse.rewrite(new URL("/auth/signin?message=Vous n'êtes pas autorisé", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token
    }
  }
);

export const config = { matcher: ['/dashboard/:path*'] };
