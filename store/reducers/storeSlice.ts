import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getColumns } from '../../api/column/getAllColumns';
import { StoreState } from '../../types/storeTypes';
import { ColumnResponse, TaskResponse } from '../../types/types';

export const initialState: StoreState = {
  columns: [],
  tasks: [],
  taskId: '',
  columnId: '',
  error: '',
  colOrder: 1,
};

export const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    setColumnId(state, action: PayloadAction<string>) {
      state.columnId = action.payload;
    },
    setColOrder(state, action: PayloadAction<number>) {
      state.colOrder = action.payload;
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
  extraReducers: {
    [getColumns.fulfilled.type]: (state, action: PayloadAction<ColumnResponse[]>) => {
      state.columns = action.payload;
    },
    [getColumns.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export default storeSlice.reducer;
