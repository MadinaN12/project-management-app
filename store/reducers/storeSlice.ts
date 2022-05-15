import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoreState } from '../../types/storeTypes';
import { ColumnResponse, TaskResponse } from '../../types/types';

export const initialState: StoreState = {
  columns: [],
  tasks: [],
  taskId: '',
};

export const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    setColumns(state, action: PayloadAction<ColumnResponse>) {
      if (state.columns.length < 10) state.columns = state.columns.concat(action.payload);
    },
    deleteColumns(state, action: PayloadAction<ColumnResponse[]>) {
      state.columns = action.payload;
    },
    setTasks(state, action: PayloadAction<TaskResponse>) {
      state.tasks = state.tasks.concat(action.payload);
    },
    deleteTasks(state, action: PayloadAction<TaskResponse[]>) {
      state.tasks = action.payload;
    },
    setTaskId(state, action: PayloadAction<string>) {
      state.taskId = action.payload;
    },
  },
});

export default storeSlice.reducer;
