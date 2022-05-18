import { BoardResponse, TaskResponse } from './types';

export interface StoreState {
  board: BoardResponse;
  error: string;
  colId: string;
  colOrder: number;
  columnId: string;
}

export interface TaskState {
  tasks: TaskResponse[];
  taskId: string;
  error: string;
}
