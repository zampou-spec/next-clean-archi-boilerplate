import { right, left } from '~/shared/either';
import { IUserUseCase } from '~/domain/usecases/Iuser-usecase';
import { IUserStorage } from '~/application/protocols/services';

export class UserUseCase implements IUserUseCase {
  private readonly userStorage: IUserStorage;
  constructor(userStorage: IUserStorage) {
    this.userStorage = userStorage;
  }

  async signIn(id: string, password: string, mode: string): IUserUseCase.output {
    const result = await this.userStorage.signIn(id, password, mode);

    if (result.isLeft()) {
      return left(result.value);
    }

    return right(result.value);
  }

  async signOut(token?: string) {
    await this.userStorage.signOut(token);
  }
}
