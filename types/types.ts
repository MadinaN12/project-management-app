import { Dispatch, SetStateAction } from 'react';

export interface IEmailForm {
  setEmailInput: Dispatch<SetStateAction<string>>;
  emailInput: string;
  handleSubmitBtn: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
