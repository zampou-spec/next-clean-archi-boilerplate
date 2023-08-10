import { Either } from '~/shared/either';
import { User } from '~/domain/entities';

export interface IUserUseCase {
  login: (email: string, password: string) => IUserUseCase.output;
}

export namespace IUserUseCase {
  export type output = Promise<Either<Error, User>>;
}
