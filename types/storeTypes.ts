import { ColumnResponse, TaskResponse } from './types';

export interface StoreState {
  columns: ColumnResponse[];
  tasks: TaskResponse[];
  taskId: string;
  error: string;
}
