import { Column } from '../../types/types';
import { PATH, URL } from '../../utils';

export async function createColumn(column: Column, boardId: string | string[], token: string) {
  try {
    const response = await fetch(`${URL}/${PATH.BOARDS}/${boardId}/${PATH.COLUMNS}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(column),
    });

    return await response.json();
  } catch (error) {
    throw new Error('not found');
  }
}
