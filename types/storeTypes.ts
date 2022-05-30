import { BoardResponse } from './types';

export interface StoreState {
  board: BoardResponse;
  error: string;
  colId: string;
  colOrder: number;
  isLoading: boolean;
  taskId: string;
  taskOrder: number;
}
