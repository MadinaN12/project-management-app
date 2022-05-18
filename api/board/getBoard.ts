import { createAsyncThunk } from '@reduxjs/toolkit';
import { PATH, URL } from '../../utils';

export const getBoard = createAsyncThunk('cards/fetchAll', async (boardId: string, thunkAPI) => {
  try {
    const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5ZWRmMjQwYy02YjdlLTQ4MDUtOTcyMi00NGVmYWY4MDk0YTQiLCJsb2dpbiI6ImZha2V1c2VyMDAxIiwiaWF0IjoxNjUxNzU2MzIwfQ.mwukYn23JFDDX2u7Kn94xvP56poGufTrMcsBDHxUf4I`;
    const response = await fetch(`${URL}/${PATH.BOARDS}/${boardId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    return await response.json();
  } catch (error) {
    return thunkAPI.rejectWithValue('not found');
  }
});
