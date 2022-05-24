import { Col, TaskProps } from '../types/types';

export function sortTasks(tasks: TaskProps[]) {
  const tasksForSort = [...tasks];
  return tasksForSort.sort((a, b) => a.order - b.order);
}

export function sortColumns(columns: Col[]) {
  const columnsForSort = [...columns];
  return columnsForSort.sort((a, b) => a.order - b.order);
}
