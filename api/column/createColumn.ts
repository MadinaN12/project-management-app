import { Column } from '../../types/types';

export function createColumn(column: Column) {
  try {
    return {
      id: column.title,
      title: column.title,
      order: 1,
    };
  } catch (error) {
    console.log(error);
  }
}
