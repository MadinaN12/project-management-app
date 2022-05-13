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

export type ModalProps = {
  active: boolean;
  setActive: (value: boolean) => void;
};

export type ConfirmModalProps = {
  title: string;
  active: boolean;
  setActive: (value: boolean) => void;
};

export type TitleInputProps = {
  title: string;
  setOpen: (value: boolean) => void;
  setNewTitle: (value: string) => void;
};
