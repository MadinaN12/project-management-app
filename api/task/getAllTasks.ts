import { PATH, URL } from '../../utils';

export async function getTasks(columnId: string, boardId: string | string[], token: string) {
  try {
    const response = await fetch(
      `${URL}/${PATH.BOARDS}/${boardId}/${PATH.COLUMNS}/${columnId}/${PATH.TASKS}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return await response.json();
  } catch (error) {
    throw new Error('not found');
  }
}
