import { Dispatch, SetStateAction } from 'react';

export interface IEmailForm {
  setEmailInput: Dispatch<SetStateAction<string>>;
  emailInput: string;
  handleSubmitBtn: (e: React.MouseEvent<HTMLButtonElement>) => void;
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
