import MainBoard from './MainBoard';
import styles from '../../styles/MainPage.module.scss';
import { ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { Board, StoreMainPage } from '../../types/Types';
import { Typography, OutlinedInput } from '@mui/material';

export default function MainPageComponent() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const select = useSelector((state) => (state as StoreMainPage).refreshBoard);

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
      setFilteredData(data);
    }

    fetchs();
  }, [select]);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const elLength = e.target.value.length;
    if (elLength) {
      setFilteredData(
        data.filter(
          (el: Board) =>
            (el.title as string).toLowerCase().slice(0, elLength) === e.target.value.toLowerCase()
        )
      );
    } else {
      setFilteredData(data);
    }
  };

  return (
    <div className={styles.boards}>
      <Typography variant="h6" sx={{ mt: 2 }}>
        Your Workspace
      </Typography>
      <OutlinedInput
        placeholder="Search boards"
        sx={{ mt: 2, mb: 2 }}
        onChange={handleChangeInput}
      />
      <section>
        {filteredData.map((board) => <MainBoard board={board} key={(board as Board).id} />) || ''}
      </section>
    </div>
  );
}
