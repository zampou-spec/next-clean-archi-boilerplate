import { Either } from '~/shared/either';
import { User } from '~/domain/entities';

export interface IUserStorage {
  signOut: (token?: string) => IUserStorage.outputSigOut;
  signIn: (id: string, password: string, mode: string) => IUserStorage.output;
}

export namespace IUserStorage {
  export type output = Promise<Either<Error, User>>;
  export type outputSigOut = Promise<Either<Error, null>>;
}
