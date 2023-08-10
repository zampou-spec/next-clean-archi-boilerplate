import { Either } from '~/shared/either';
import { User } from '~/domain/entities';

export interface IUserStorage {
  login(email: string, password: string): IUserStorage.output;
}

export namespace IUserStorage {
  export type output = Promise<Either<Error, User>>;
}
