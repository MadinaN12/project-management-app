import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createColumn } from '../../api/column/createColumn';
import { StoreState } from '../../types/storeTypes';
import { ColumnResponse, TaskResponse } from '../../types/types';

export const initialState: StoreState = {
  columns: [],
  column: { id: '', title: '', order: 1 },
  tasks: [],
  taskId: '',
  isLoading: false,
  error: '',
};

export const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
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
  extraReducers: {
    [createColumn.pending.type]: (state) => {
      state.isLoading = true;
    },
    [createColumn.fulfilled.type]: (state, action: PayloadAction<ColumnResponse>) => {
      state.isLoading = false;
      state.error = '';
      state.column = action.payload;
    },
    [createColumn.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default storeSlice.reducer;
