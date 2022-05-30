import { PATH, URL } from '../../utils';

export async function getAllUsers(token: string) {
  try {
    const response = await fetch(`${URL}/${PATH.USERS}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return await response.json();
  } catch (error) {
    throw new Error('not found');
  }
}
