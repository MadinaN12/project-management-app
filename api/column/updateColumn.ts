import { Column } from '../../types/types';
import { PATH, URL } from '../../utils';

export async function updateColumn(
  column: Column,
  columnId: string,
  boardId: string | string[],
  token: string
) {
  const response = await fetch(`${URL}/${PATH.BOARDS}/${boardId}/${PATH.COLUMNS}/${columnId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(column),
  });
  return await response.json();
}
