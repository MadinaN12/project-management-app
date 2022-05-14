import { ILoginResponse, ISignupResponse } from '../types/registrationTypes';

const API_URL = 'https://morning-spire-63546.herokuapp.com/';

enum API_ENDPOINTS {
  SIGNUP = 'signup',
  SIGNIN = 'signin',
}

export const PostUser = async (name: string, login: string, password: string) => {
  console.log('send data');
  const response = await fetch(`${API_URL}${API_ENDPOINTS.SIGNUP}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, login, password }),
  });
  console.log(response, 123123123123);
  const data: ISignupResponse = await response.json();
  return data;
};

export const LoginUser = async (login: string, password: string): Promise<ILoginResponse> => {
  const response = await fetch(`${API_URL}${API_ENDPOINTS.SIGNIN}`, {
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
