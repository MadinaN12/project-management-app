import { Task } from '../../types/types';

export function updateTask(task: Task) {
  try {
    return {
      id: task.title,
      title: task.title,
      order: 1,
      description: task.description,
      userId: '1234',
      boardId: '1',
      columnId: '1',
    };
  } catch (error) {
    throw new Error('task not updated');
  }
}
