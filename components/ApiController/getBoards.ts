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
