export interface PropMain {
  name?: string;
  board?: Board;
}

export type Board = {
  title?: string;
  id?: number | string;
  info?: string;
};
