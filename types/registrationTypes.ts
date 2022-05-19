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

export interface IAdditionalMenu {
  isLogin: boolean;
  children: string;
}

export interface ISignupInputs {
  [key: string]: string;
  nameInput: string;
  emailInput: string;
  passwordInput: string;
  rePasswordInput: string;
}

export interface IEmtyErrorsInputs {
  [key: string]: boolean;
  nameInput: boolean;
  emailInput: boolean;
  passwordInput: boolean;
  rePasswordInput: boolean;
}
