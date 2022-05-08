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
