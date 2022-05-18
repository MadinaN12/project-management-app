import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getBoard } from '../../api/board/getBoard';
import { StoreState } from '../../types/storeTypes';
import { BoardResponse } from '../../types/types';

const initBoard: BoardResponse = {
  id: '',
  title: '',
  columns: [
    {
      id: '',
      title: '',
      order: 1,
      tasks: [
        {
          id: '',
          title: '',
          order: 1,
          done: false,
          description: '',
          userId: '',
          files: [
            {
              filename: '',
              fileSize: 0,
            },
          ],
        },
      ],
    },
  ],
};

export const initialState: StoreState = {
  board: initBoard,
  colId: '',
  error: '',
  colOrder: 1,
};

export const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    setColumnId(state, action: PayloadAction<string>) {
      state.colId = action.payload;
    },
    setColOrder(state, action: PayloadAction<number>) {
      state.colOrder = action.payload;
    },
  },
  extraReducers: {
    [getBoard.fulfilled.type]: (state, action: PayloadAction<BoardResponse>) => {
      state.board = action.payload;
    },
    [getBoard.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export default storeSlice.reducer;
