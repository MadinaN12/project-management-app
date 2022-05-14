import { createSlice } from '@reduxjs/toolkit';

const boardSlice = createSlice({
  name: 'Boards',
  initialState: [],
  reducers: {
    addBoard(state, action) {
      state.push(action.payload);
    },
  },
});

const boardRefresh = createSlice({
  name: 'BoardRefresh',
  initialState: [],
  reducers: {
    refreshBoard(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addBoard } = boardSlice.actions;
export const { refreshBoard } = boardRefresh.actions;

const boardRef = boardRefresh.reducer;
export { boardRef };
export default boardSlice.reducer;
