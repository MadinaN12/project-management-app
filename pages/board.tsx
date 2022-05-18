import { Button, Grid } from '@mui/material';
import BoardControls from '../components/board/controls';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { column } from '../styles/styledBoard';
import { useEffect, useState } from 'react';
import { getBoard } from '../api/board/getBoard';
import ColumnList from '../components/column/columnList';
import Modal from '../components/board/modal';

const Board = () => {
  const [modalActive, setModalActive] = useState(false);
  const { board } = useAppSelector((state) => state.boardReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBoard('66fef433-3dcc-4501-9bbd-e990dab1c68e'));
  }, [dispatch]);

  return (
    <>
      <Grid container sx={{ backgroundColor: '#448aff', height: '100vh' }}>
        <BoardControls />
        <Grid container sx={column.boardGrid}>
          <ColumnList columns={board.columns} />
          <Button variant="contained" onClick={() => setModalActive(true)} sx={column.addBtn}>
            + add column
          </Button>
        </Grid>
      </Grid>
      <Modal active={modalActive} setActive={setModalActive} />
    </>
  );
};

export default Board;
