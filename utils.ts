export const URL = 'https://frozen-shelf-23662.herokuapp.com';

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
