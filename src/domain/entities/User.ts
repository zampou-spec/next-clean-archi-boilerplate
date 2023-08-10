export type User = {
  id: number;
  name: string;
  email: string;
  access_token?: string;
  token_type?: string;
  expires_in?: number;
};
