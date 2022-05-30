import { ChangeEventHandler, Dispatch, SetStateAction } from 'react';

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

export interface PropMain {
  name?: string;
  board?: Board;
}

export type UserProfile = {
  id?: string;
  name?: string;
  login?: string;
  password?: string;
};

export interface UserProfileData extends UserProfile {
  token?: string;
}

export type UserProfileProps = {
  data: UserProfile;
  control: {
    isEditing: boolean;
    setIsEditing: (arg0: boolean) => void;
    setData: (arg0: Array<object> | object) => void;
    setIsRemoving?: (arg0: boolean) => void;
    setRefresh?: (arg0: boolean) => void;
  };
};

export type ConfigureUserMethods = {
  handleChangeTitle?:
    | VoidFunction
    | ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
    | undefined;
  handleChangeLogin?:
    | VoidFunction
    | ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
    | undefined;
  handleChangePassword?:
    | VoidFunction
    | ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
    | undefined;
};

export type PartUserEditProps = {
  userInfo: UserProfileData;
  configureUser: ConfigureUserMethods;
};

export interface ILogoInterface {
  width: number;
  height: number;
  onClick: () => void;
}

export type Column = {
  title: string;
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

export type InputRef = {
  firstChild?: HTMLElement;
};

export type Task = {
  title: string;
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
  description: string;
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
  boardId: string | string[];
  columnId: string;
};

export type TaskProps = {
  id: string;
  title: string;
  order: number;
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
  children?: JSX.Element;
}

export type Users = {
  id: string;
  name: string;
  login: string;
};

export type SelectProps = {
  user: string;
  setUser: (value: string) => void;
};

export type ConfirmProps = {
  title: string;
  active: boolean;
  setActive: (value: boolean) => void;
  handleClose: () => void;
};

export type TaskPropsModal = {
  title: string;
  text: string;
  active: boolean;
  user: string;
  description: string;
  onTextChanged: (e: React.ChangeEvent) => void;
  setUser: (value: string) => void;
  setActive: (value: boolean) => void;
  handleClick: () => void;
  onDescriptionChanged: (e: React.ChangeEvent) => void;
};
