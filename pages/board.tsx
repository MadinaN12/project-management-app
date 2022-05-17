import { Grid } from '@mui/material';
import BoardColumn from '../components/column/column';
import BoardControls from '../components/board/controls';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { column } from '../styles/styledBoard';
import { useEffect } from 'react';
import { getColumns, token } from '../api/column/getAllColumns';

const Board = () => {
  const { columns } = useAppSelector((state) => state.boardReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getColumns(token));
  }, [dispatch]);

  return (
    <Grid container sx={{ backgroundColor: '#448aff', height: '100vh' }}>
      <BoardControls />
      <Grid container sx={column.boardGrid}>
        {columns.map((item) => (
          <Grid key={item.id} item>
            <BoardColumn col={item} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Board;
