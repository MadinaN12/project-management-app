import { createAsyncThunk } from '@reduxjs/toolkit';
import { PATH, URL } from '../../utils';

export const getBoard = createAsyncThunk(
  'cards/fetchAll',
  async ({ boardId, token }: { boardId: string; token: string }, thunkAPI) => {
    try {
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
  }
);
