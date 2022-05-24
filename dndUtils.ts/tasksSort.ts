import { TaskProps } from '../types/types';

export function sortTasks(tasks: TaskProps[]) {
  const tasksForSort = [...tasks];
  return tasksForSort.sort((a, b) => a.order - b.order);
}
