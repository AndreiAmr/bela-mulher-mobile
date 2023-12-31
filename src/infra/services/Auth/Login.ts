import { http } from '@http/index';
import { LoginData } from 'src/types/Auth';

export const loginRequest = async (data: LoginData) => {
  const response = await http.post('/login', data);

  console.log({ response: response.data });
  return response.data;
};
