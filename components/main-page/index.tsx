import MainBoard from './MainBoard';
import styles from '../../styles/MainPage.module.scss';
import { useEffect } from 'react';

export default function MainPageComponent() {
  useEffect(() => {
    async function fetchs() {
      const response = await fetch('https://morning-spire-63546.herokuapp.com/boards', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzNTc5ZWIwMC01ODk1LTQ0YWUtOWQ4NC1iYjMxYjgwZjQzYmQiLCJsb2dpbiI6Im5hbWUiLCJpYXQiOjE2NTE4ODY4MjF9.uh1bOO9rPHP7N03ok0DRPMUO1EVwtil5ALbi9VTQmgI`,
        },
      });
      const res = await response.json();
      console.log(res);
      return res;
    }
    fetchs();
  }, []);

  return (
    <div className={styles.boards}>
      <button>Create</button>
      <h1>Your Workspace</h1>
      <MainBoard />
    </div>
  );
}
