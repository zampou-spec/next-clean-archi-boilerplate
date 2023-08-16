import { Either } from '~/shared/either';
import { User } from '~/domain/entities';

export interface IUserStorage {
  signOut: (token?: string) => void;
  signIn(email: string, password: string, mode: string): IUserStorage.output;
}

export namespace IUserStorage {
  export type output = Promise<Either<Error, User>>;
}
