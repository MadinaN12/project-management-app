export const URL = 'https://obscure-scrubland-34655.herokuapp.com';

export enum PATH {
  BOARDS = 'boards',
  COLUMNS = 'columns',
  TASKS = 'tasks',
  SIGNUP = 'signup',
  SIGNIN = 'signin',
  USERS = 'users',
}

export function getToken() {
  if (typeof window !== 'undefined' && localStorage.getItem('token')) {
    return localStorage.getItem('token');
  }
  return null;
}
