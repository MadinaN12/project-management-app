import { createAsyncThunk } from '@reduxjs/toolkit';
import { Column } from '../../types/types';
import { PATH, URL } from '../../utils';

export const createColumn = createAsyncThunk('cards/fetchAll', async (column: Column, thunkAPI) => {
  try {
    const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5ZWRmMjQwYy02YjdlLTQ4MDUtOTcyMi00NGVmYWY4MDk0YTQiLCJsb2dpbiI6ImZha2V1c2VyMDAxIiwiaWF0IjoxNjUxNzU2MzIwfQ.mwukYn23JFDDX2u7Kn94xvP56poGufTrMcsBDHxUf4I`;
    const boardId = '24ea983c-84cb-43ba-909c-b4a91c7742c8';
    const response = await fetch(`${URL}/${PATH.BOARDS}/${boardId}/${PATH.COLUMNS}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(column),
    });

    return response.json();
  } catch (error) {
    return thunkAPI.rejectWithValue('failed to create');
  }
});
