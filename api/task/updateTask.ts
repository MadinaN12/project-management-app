import { UpdateTask } from '../../types/types';
import { PATH, URL } from '../../utils';

export async function updateTask(
  task: UpdateTask,
  columnId: string,
  taskId: string,
  boardId: string,
  token: string
) {
  try {
    const response = await fetch(
      `${URL}/${PATH.BOARDS}/${boardId}/${PATH.COLUMNS}/${columnId}/${PATH.TASKS}/${taskId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(task),
      }
    );

    return await response.json();
  } catch (error) {
    throw new Error('not found');
  }
}
