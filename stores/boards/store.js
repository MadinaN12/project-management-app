import { configureStore } from '@reduxjs/toolkit';
import boardSlice, { boardRef } from './slices';

export const store = configureStore({
  reducer: {
    boards: boardSlice,
    refreshBoard: boardRef,
  },
});
