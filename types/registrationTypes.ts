import { Dispatch, SetStateAction } from 'react';

export interface IEmailForm {
  setEmailInput: Dispatch<SetStateAction<string>>;
  emailInput: string;
  handleSubmitBtn: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export type ILoginResponse = IRegError | ILoginSuccess;

export interface IRegError {
  statusCode: number;
  message: string;
}

export interface ILoginSuccess {
  token: string;
}

export interface ISignupSuccess {
  id: string;
  name: string;
  login: string;
}

export type ISignupResponse = IRegError | ISignupSuccess;
