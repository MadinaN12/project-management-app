import { Col, TaskProps } from './types';

export const ItemTypes = {
  TASK: 'task',
  COLUMN: 'column',
};

export interface CardProps {
  colId: string;
  atOrder: number;
  order: number;
  tasks: TaskProps;
  moveCard: (order: number, to: number) => void;
  findCard: (order: number) => { index: number };
}

export interface ColumnProps {
  atOrder: number;
  order: number;
  col: Col;
  moveCard: (order: number, to: number) => void;
  findCard: (order: number) => { index: number };
}

export interface Columns {
  atOrder: number;
  columns: Col[];
  moveCard: (order: number, to: number) => void;
  findCard: (order: number) => { index: number };
}

export interface Item {
  order: number;
  originalIndex: number;
}
