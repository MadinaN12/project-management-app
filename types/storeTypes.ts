import { ColumnResponse, TaskResponse } from './types';

type column = {
  id: string;
  title: string;
  order: number;
};

export interface StoreState {
  columns: ColumnResponse[];
  tasks: TaskResponse[];
  taskId: string;
  isLoading: boolean;
  error: string;
  column: column;
}
