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
