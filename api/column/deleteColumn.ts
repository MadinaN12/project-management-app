import { PATH, URL } from '../../utils';

export async function deleteColumn(columnId: string, boardId: string, token: string) {
  try {
    await fetch(`${URL}/${PATH.BOARDS}/${boardId}/${PATH.COLUMNS}/${columnId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    throw new Error('not found');
  }
}
