import MainBoard from './MainBoard';
import styles from '../../styles/MainPage.module.scss';
import { useEffect, useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from '../../stores/boards/store';
import Button from '@mui/material/Button';
import CreateBoardPopUp from './CreateBoardPopUp';

export default function MainPageComponent() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const select = useSelector((state) => state.refreshBoard);
  console.log();

  useEffect(() => {
    async function fetchs() {
      const response = await fetch('https://morning-spire-63546.herokuapp.com/boards', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzNTc5ZWIwMC01ODk1LTQ0YWUtOWQ4NC1iYjMxYjgwZjQzYmQiLCJsb2dpbiI6Im5hbWUiLCJpYXQiOjE2NTE4ODY4MjF9.uh1bOO9rPHP7N03ok0DRPMUO1EVwtil5ALbi9VTQmgI`,
        },
      });
      const data = await response.json();

      setData(data);
      return data;
    }
    fetchs();
  }, [select]);

  return (
    <div className={styles.boards}>
      <Button variant="contained">Create</Button>
      <h1>Your Workspace</h1>
      <section>{data.map((board) => <MainBoard board={board} key={board.id} />) || ''}</section>
    </div>
  );
}

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzNTc5ZWIwMC01ODk1LTQ0YWUtOWQ4NC1iYjMxYjgwZjQzYmQiLCJsb2dpbiI6Im5hbWUiLCJpYXQiOjE2NTE4ODY4MjF9.uh1bOO9rPHP7N03ok0DRPMUO1EVwtil5ALbi9VTQmgI
