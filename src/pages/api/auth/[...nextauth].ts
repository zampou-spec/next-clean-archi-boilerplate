import NextAuth, { NextAuthOptions } from 'next-auth';
import { userFactory } from '~/infrastructure/factories';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email', name: 'email' },
        password: { label: 'Password', type: 'password', name: 'password' }
      },
      async authorize(credentials, req) {
        const { email, password } = credentials as any;
        const userUseCase = userFactory();
        const res = await userUseCase.login(email, password);

        if (res.isRight()) {
          return res.value as any;
        }

        return null;
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/auth/login'
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token;
      return session;
    }
  }
};

export default NextAuth(authOptions);
