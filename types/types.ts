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
