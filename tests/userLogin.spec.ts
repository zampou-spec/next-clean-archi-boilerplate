import { userFactory } from '~/infrastructure/factories';

describe('User handler fetches', () => {
  const userUseCase = userFactory();

  it('Get user success', async () => {
    const res = await userUseCase.login('test@example.com', 'password');

    if (res.isRight()) {
      expect(res.value.id).toBe(1);
    } else {
      throw new Error('The request failed');
    }
  });

  it('Get user Error', async () => {
    const res = await userUseCase.login('test@example.com', 'passwo');

    if (res.isLeft()) {
      expect(res.value.message).toBe('Credential is not correct.');
    } else {
      throw new Error('The request should fail.');
    }
  });
});
