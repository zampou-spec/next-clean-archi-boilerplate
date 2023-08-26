export type User = {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  mobile_number: string;
  access_token?: string;
  token_type?: string;
  expires_in?: number;
  role: 'user' | 'admin';
};
