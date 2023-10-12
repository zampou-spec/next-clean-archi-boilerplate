import { User } from '~/domain/entities';
import NextAuth, { NextAuthOptions } from 'next-auth';
import { userFactory } from '~/infrastructure/factories';
import CredentialsProvider from 'next-auth/providers/credentials';

type CredentialsProps = {
  id: string;
  password: string;
  login_mode: string;
};

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {},
      async authorize(credentials) {
        const userUseCase = userFactory();
        const { id, password, login_mode } = credentials as CredentialsProps;

        const res = await userUseCase.signIn(id, password, login_mode);

        if (res.isRight()) {
          return res.value;
        }

        return null;
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/auth/signin'
  },
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (trigger === 'update') {
        return { ...token, ...session.user };
      }

      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token as User;
      return session;
    }
  },
  events: {
    async signOut({ token }) {
      const { access_token } = token;
      const userUseCase = userFactory();
      await userUseCase.signOut(access_token as string);
    }
  }
};

const handle = NextAuth(authOptions);
export { handle as GET, handle as POST };
