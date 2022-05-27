import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { UserProfile } from '../../types/types';
import { getBoards } from '../ApiController/userBoards';
import { style } from '../../styles/user/UserProfile';

export default function StatisticsUser({ data = { name: 'Loading' } }: { data?: UserProfile }) {
  const [boardsCount, setBoardsCount] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem('token');

    getBoards(token as string).then((i) => setBoardsCount(i.length));
  }, []);
  return (
    <>
      <hr style={style.hr} />
      <Typography variant="subtitle2" sx={{ m: '0 auto 3%' }}>
        {data?.name || 'User'} has boards:
        <Typography sx={style.boardCount}>{boardsCount || 0}</Typography>
      </Typography>
    </>
  );
}
