import { Task } from '../../types/types';

export function createTask(task: Task) {
  try {
    return {
      id: task.title,
      title: task.title,
      order: 1,
      description: task.description,
      userId: '1234',
      boardId: '1',
      columnId: task.title,
    };
  } catch (error) {
    console.log(error);
  }
}
