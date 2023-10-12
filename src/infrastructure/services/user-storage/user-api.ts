import { User } from '~/domain/entities';
import { left, right } from '~/shared/either';
import apiClient from '~/shared/settings/api-client';
import { IUserStorage } from '~/application/protocols/services';

export class UserApi implements IUserStorage {
  async signIn(id: string, password: string, mode: string): IUserStorage.output {
    let user: User;

    try {
      const res = await apiClient.post('api/auth/login', { json: { id, password, mode } });
      user = await res.json();
    } catch (error) {
      return left(new Error('Credential is not correct.'));
    }

    return right(user);
  }

  async signOut(token?: string): IUserStorage.outputSigOut {
    try {
      await apiClient.post('api/auth/signout', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      return right(null);
    } catch (error) {
      return left(new Error('signOut Error'));
    }
  }
}
