import { PATH, URL } from '../../utils';

export async function getTaskById(
  boardId: string | string[],
  columnId: string,
  taskId: string,
  token: string
) {
  try {
    const response = await fetch(
      `${URL}/${PATH.BOARDS}/${boardId}/${PATH.COLUMNS}/${columnId}/${PATH.TASKS}/${taskId}`,
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
