import { Either } from '~/shared/either';
import { User } from '~/domain/entities';

export interface IUserUseCase {
  signOut: (token?: string) => void;
  signIn: (email: string, password: string, mode: string) => IUserUseCase.output;
}

export namespace IUserUseCase {
  export type output = Promise<Either<Error, User>>;
}
