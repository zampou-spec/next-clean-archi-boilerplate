export type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  mobile_number: string;
  role: string | 'user' | 'admin';
  access_token?: string;
  token_type?: string;
  expires_in?: number;
};
