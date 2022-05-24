import { ILoginResponse, ISignupResponse } from '../types/registrationTypes';
import { URL, PATH } from '../utils';

export const PostUser = async (name: string, login: string, password: string) => {
  const response = await fetch(`${URL}${PATH.SIGNUP}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, login, password }),
  });
  const data: ISignupResponse = await response.json();
  return data;
};

export const LoginUser = async (login: string, password: string): Promise<ILoginResponse> => {
  const response = await fetch(`${URL}${PATH.SIGNIN}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ login, password }),
  });
  const data: ILoginResponse = await response.json();
  return data;
};
