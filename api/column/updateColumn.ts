import { Column } from '../../types/types';
import { PATH, URL } from '../../utils';

export async function updateColumn(
  column: Column,
  columnId: string,
  boardId: string,
  token: string
) {
  try {
    await fetch(`${URL}/${PATH.BOARDS}/${boardId}/${PATH.COLUMNS}/${columnId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(column),
    });
  } catch (error) {
    throw new Error('not found');
  }
}
