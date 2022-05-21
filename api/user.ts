import { ILoginResponse } from '../types/types';
import { PATH, URL } from '../utils';

const APP_JSON = 'application/json';

export const PostUser = async (name: string, login: string, password: string) => {
  await fetch(`${URL}/${PATH.SIGNUP}`, {
    method: 'POST',
    headers: {
      Accept: APP_JSON,
      'Content-Type': APP_JSON,
    },
    body: JSON.stringify({ name, login, password }),
  });
};

export const LoginUser = async (login: string, password: string): Promise<ILoginResponse> => {
  const response = await fetch(`${URL}/${PATH.SIGNIN}`, {
    method: 'POST',
    headers: {
      Accept: APP_JSON,
      'Content-Type': APP_JSON,
    },
    body: JSON.stringify({ login, password }),
  });
  const data: ILoginResponse = await response.json();
  return data;
};
