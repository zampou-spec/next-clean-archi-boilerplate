import 'next-auth';
import { User } from '~/domain/entities';

declare module 'next-auth' {
  interface Session {
    user: User;
  }
}
