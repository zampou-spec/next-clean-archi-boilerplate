import { NextResponse } from 'next/server';
import { withAuth, NextRequestWithAuth } from 'next-auth/middleware';

const roleBasedRedirect = (req: NextRequestWithAuth, allowedRoles: string[], redirectPath: string) => {
  const role = req.nextauth.token?.role as string;

  if (!role || !allowedRoles.includes(role)) {
    return NextResponse.redirect(new URL(redirectPath, req.url));
  }

  return null;
};

export default withAuth(
  async (req: NextRequestWithAuth) => {
    const pathname = req.nextUrl.pathname;

    if (pathname.startsWith('/dashboard/admin')) {
      return roleBasedRedirect(req, ['admin'], '/dashboard');
    }

    if (pathname.startsWith('/dashboard')) {
      return roleBasedRedirect(req, ['user', 'admin'], '/auth/signin');
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token
    }
  }
);

export const config = { matcher: ['/dashboard/:path*'] };
