import { ColumnResponse } from '../../types/types';
import { PATH, URL } from '../../utils';

export async function getBoards(token: string) {
  if (!token) return null;
  try {
    const res = await fetch(`${URL}/${PATH.BOARDS}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.status < 300) return await res.json();
  } catch (err) {
    return null;
  }
}

export async function getLastColumn(token: string, boardId: string) {
  try {
    const res = await fetch(`${URL}/${PATH.BOARDS}/${boardId}/${PATH.COLUMNS}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data: ColumnResponse | undefined = await res.json();

    (data as unknown as Array<ColumnResponse>).length > 0
      ? (data as unknown as Array<ColumnResponse>)[
          (data as unknown as Array<ColumnResponse>).length - 1
        ]
      : null;
  } catch (err) {
    return new Error(`${err}`);
  }
}
