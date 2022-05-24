import { TaskProps } from './types';

export const ItemTypes = {
  TASK: 'task',
};

export interface CardProps {
  colId: string;
  atOrder: number;
  order: number;
  tasks: TaskProps;
  moveCard: (order: number, to: number) => void;
  findCard: (order: number) => { index: number };
}

export interface Item {
  order: number;
  originalIndex: number;
}
