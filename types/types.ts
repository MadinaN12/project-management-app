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

export enum ErrorTypeKind {
  name = 'name',
  email = 'email',
  password = 'password',
}

export type ErrorType = ErrorTypeKind.name | ErrorTypeKind.email | ErrorTypeKind.password;

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

export interface PropMain {
  name?: string;
  board?: Board;
}

export type Board = {
  title?: string;
  id?: number | string | undefined;
  info?: string;
};

export type StoreMainPage = {
  refreshBoard: VoidFunction | unknown;
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

export type Task = {
  title: string;
  order: number;
  description: string;
  userId: string;
};

export type TaskResponse = {
  id: string;
  title: string;
  order: number;
  description: string;
  userId: string;
  boardId: string;
  columnId: string;
};

export type BoardResponse = {
  id: string;
  title: string;
  columns: [
    {
      id: string;
      title: string;
      order: number;
      tasks: [
        {
          id: string;
          title: string;
          order: number;
          done: boolean;
          description: string;
          userId: string;
          files: [
            {
              filename: string;
              fileSize: number;
            }
          ];
        }
      ];
    }
  ];
};

export type Col = {
  id: string;
  title: string;
  order: number;
  tasks: [
    {
      id: string;
      title: string;
      order: number;
      done: boolean;
      description: string;
      userId: string;
      files: [
        {
          filename: string;
          fileSize: number;
        }
      ];
    }
  ];
};

export type UpdateTask = {
  title: string;
  order: number;
  description: string;
  userId: string;
  boardId: string;
  columnId: string;
};

export type TaskProps = {
  id: string;
  title: string;
  order: number;
  done: boolean;
  description: string;
  userId: string;
  files: [
    {
      filename: string;
      fileSize: number;
    }
  ];
};

export type TaskModalProps = {
  tasks: TaskProps;
  active: boolean;
  setActive: (value: boolean) => void;
};

export interface AuthProps {
  children: JSX.Element;
}
