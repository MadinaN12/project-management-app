import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getTasks } from '../../api/task/getAllTasks';
import { TaskState } from '../../types/storeTypes';
import { TaskResponse } from '../../types/types';

export const initialState: TaskState = {
  tasks: [],
  taskId: '',
  error: '',
};

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTaskId(state, action: PayloadAction<string>) {
      state.taskId = action.payload;
    },
  },
  extraReducers: {
    [getTasks.fulfilled.type]: (state, action: PayloadAction<TaskResponse[]>) => {
      state.tasks = action.payload;
    },
    [getTasks.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export default taskSlice.reducer;
