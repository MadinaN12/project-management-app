import { Column } from '../../types/types';

export async function createColumn(column: Column) {
  try {
    return {
      id: '74e23264-df91-4255-be59-787f8f2efc24',
      title: column.title,
      order: 1,
    };
  } catch (error) {
    console.log(error);
  }
}
