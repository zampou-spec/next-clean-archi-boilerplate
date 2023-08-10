import { right, left } from '~/shared/either';
import { IUserUseCase } from '~/domain/usecases/Iuser-usecase';
import { IUserStorage } from '~/application/protocols/services';

export class UserUseCase implements IUserUseCase {
  private readonly userStorage: IUserStorage;
  constructor(userStorage: IUserStorage) {
    this.userStorage = userStorage;
  }

  async login(email: string, password: string): IUserUseCase.output {
    const result = await this.userStorage.login(email, password);

    if (result.isLeft()) {
      return left(result.value);
    }

    return right(result.value);
  }
}
