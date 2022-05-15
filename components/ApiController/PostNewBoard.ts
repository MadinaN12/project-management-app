import { Board } from '../../types/types';
import { URL, PATH } from '../../utils';

export async function postDataBoard(obj: Board, token: string) {
  console.log(obj, token);

  if (obj.title && obj.title.length) {
    const res = await fetch(`${URL}/${PATH.BOARDS}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(obj),
    });
    await res.json();
  }
}

export async function deleteBoard(obj: Board, token: string) {
  await fetch(`${URL}/${PATH.BOARDS}/${obj.id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
}
