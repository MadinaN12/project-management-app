export const URL = 'https://morning-spire-63546.herokuapp.com';

export enum PATH {
  BOARDS = 'boards',
  COLUMNS = 'columns',
  TASKS = 'tasks',
}

export function getToken() {
  if (typeof window !== 'undefined' && localStorage.getItem('token')) {
    return localStorage.getItem('token');
  }
  return null;
}
