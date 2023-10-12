export type User = {
  id: string;
  email: string;
  image: string;
  last_name: string;
  first_name: string;
  token_type?: string;
  expires_in?: number;
  mobile_number: string;
  access_token?: string;
  role: 'user' | 'admin';
};
