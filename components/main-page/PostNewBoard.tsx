import { Board } from '../../types/Types';

export async function postDataBoard(obj: Board, token: string) {
  if (obj.title && obj.title.length) {
    const res = await fetch(`https://morning-spire-63546.herokuapp.com/boards`, {
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
  await fetch(`https://morning-spire-63546.herokuapp.com/boards/${obj.id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
}
