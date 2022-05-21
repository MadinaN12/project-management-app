import { PATH, URL } from '../../utils';

export async function deleteTask(
  columnId: string,
  taskId: string,
  boardId: string | string[],
  token: string
) {
  try {
    await fetch(
      `${URL}/${PATH.BOARDS}/${boardId}/${PATH.COLUMNS}/${columnId}/${PATH.TASKS}/${taskId}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    throw new Error('not found');
  }
}
