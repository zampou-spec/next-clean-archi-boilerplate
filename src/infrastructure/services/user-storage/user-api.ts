import { User } from '~/domain/entities';
import { left, right } from '~/shared/either';
import apiClient from '~/shared/settings/api-client';
import { IUserStorage } from '~/application/protocols/services';

export class UserApi implements IUserStorage {
  async login(email: string, password: string): IUserStorage.output {
    let user: User;

    try {
      const res = await apiClient.post('api/auth/login', { json: { email, password } });
      user = await res.json();
    } catch (error: any) {
      return left(new Error('Credential is not correct.'));
    }

    return right(user);
  }
}
