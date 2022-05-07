import MainBoard from './MainBoard';
import styles from '../../styles/MainPage.module.scss';
import { useEffect, useState } from 'react';
import CreateBoardPopUp from './CreateBoardPopUp';
import { ThemeProvider } from '@mui/material';
import theme from '../material-ui/theme';
import Button from '@mui/material/Button';

export default function MainPageComponent() {
  const [markedStatus, setMarkedStatus] = useState(false);
  const [data, setData] = useState([]);

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

      setData(res);
      return res;
    }
    fetchs();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.boards}>
        <Button variant="contained">Create</Button>
        <h1>Your Workspace</h1>
        <CreateBoardPopUp />
        <section>
          {data.map((board) => {
            return <MainBoard board={board} key={board.id} />;
          }) || ''}
        </section>
      </div>
    </ThemeProvider>
  );
}

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzNTc5ZWIwMC01ODk1LTQ0YWUtOWQ4NC1iYjMxYjgwZjQzYmQiLCJsb2dpbiI6Im5hbWUiLCJpYXQiOjE2NTE4ODY4MjF9.uh1bOO9rPHP7N03ok0DRPMUO1EVwtil5ALbi9VTQmgI
