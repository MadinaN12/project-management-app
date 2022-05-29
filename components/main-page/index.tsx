import MainBoard from './MainBoard';
import styles from '../../styles/MainPage.module.scss';
import { ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Board, StoreMainPage } from '../../types/types';
import { Typography, OutlinedInput } from '@mui/material';
import { getBoards } from '../ApiController/getBoards';
import { useRouter } from 'next/router';
import { Box } from '@mui/system';

export default function MainPageComponent() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const select = useSelector((state) => (state as StoreMainPage).refreshBoard);
  const router = useRouter();
  let token = '';

  if (typeof window !== 'undefined') {
    token = localStorage.getItem('token') as string;
  }

  useEffect(() => {
    (async function getData() {
      let res;
      if (token) {
        res = await getBoards(token);
      }
      if (res) {
        setData(res);
        setFilteredData(res);
      } else router.push('/');
    })();
  }, [router, select, token]);

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const elLength = e.target.value.length;
    if (elLength) {
      setFilteredData(
        data.filter((el: Board) =>
          (el.title as string).toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    } else {
      setFilteredData(data);
    }
  };

  return (
    <Box className={styles.boards}>
      <Typography variant="h6" sx={{ mt: 2 }}>
        Your Workspace
      </Typography>
      <OutlinedInput
        placeholder="Search boards"
        sx={{ m: '2% 0', width: '40%' }}
        onChange={handleChangeSearch}
      />
      <section>
        {filteredData.length
          ? filteredData.map((board) => <MainBoard board={board} key={(board as Board).id} />)
          : ''}
      </section>
    </Box>
  );
}
