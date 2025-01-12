import { jwtDecode } from 'jwt-decode';

export const verifyTokens = (token: string) => {
  return jwtDecode(token);
};
