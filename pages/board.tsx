import { Grid } from '@mui/material';
import BoardColumn from '../components/column/column';
import BoardControls from '../components/board/controls';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { column } from '../styles/styledBoard';
import { useEffect } from 'react';
import { getBoard } from '../api/board/getBoard';

const Board = () => {
  const { board } = useAppSelector((state) => state.boardReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBoard('66fef433-3dcc-4501-9bbd-e990dab1c68e'));
  }, [dispatch]);

  return (
    <Grid container sx={{ backgroundColor: '#448aff', height: '100vh' }}>
      <BoardControls />
      <Grid container sx={column.boardGrid}>
        {board.columns.map((item) => (
          <Grid key={item.id} item>
            <BoardColumn col={item} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Board;
