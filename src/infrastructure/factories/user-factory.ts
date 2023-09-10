import { UserApi } from '~/infrastructure/services';
import { UserUseCase } from '~/application/usecases';

export const userFactory = (): UserUseCase => {
  const userStorage = new UserApi();
  return new UserUseCase(userStorage);
};
