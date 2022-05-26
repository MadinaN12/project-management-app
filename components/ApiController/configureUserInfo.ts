import { URL, PATH } from '../../utils';
import { UserProfile } from '../../types/types';

export async function getUserInfo(token: string, id: string) {
  try {
    const res = await fetch(`${URL}/${PATH.USERS}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return await res.json();
  } catch (error) {
    return new Error('user not found');
  }
}

export async function updateUserInfo(token: string, id: string, data: UserProfile) {
  try {
    const res = await fetch(`${URL}/${PATH.USERS}/${id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Accept: 'applcation/json',
      },
      body: JSON.stringify(data),
    });
    return await res.json();
  } catch (error) {
    return new Error("user hasn't been found");
  }
}

export async function deleteUser(token: string, id: string) {
  try {
    const res = await fetch(`${URL}/${PATH.USERS}/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return await res.json();
  } catch (error) {
    return new Error('user not found');
  }
}

// export async function get
