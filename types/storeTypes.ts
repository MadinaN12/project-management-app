import { ColumnResponse, TaskResponse } from './types';

export interface StoreState {
  columns: ColumnResponse[];
  tasks: TaskResponse[];
}
