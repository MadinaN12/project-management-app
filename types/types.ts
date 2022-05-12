import { Dispatch, SetStateAction } from 'react';

export interface IEmailForm {
  setEmailInput: Dispatch<SetStateAction<string>>;
  emailInput: string;
  handleSubmitBtn: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface ILogoInterface {
  width: number;
  height: number;
  onClick: () => void;
}

export type Column = {
  title: string;
  order: number;
};

export type ColumnResponse = {
  id: string;
  title: string;
  order: number;
};

export type ILoginResponse = ILoginError | ILoginSuccess;

export interface ILoginError {
  statusCode: number;
  message: string;
}

export interface ILoginSuccess {
  token: string;
}

export interface IValidator {
  isValid: boolean;
  validMessage: string;
}
