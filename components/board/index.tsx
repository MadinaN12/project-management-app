import { Button, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { getBoard } from '../../api/board/getBoard';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { column } from '../../styles/board/styledBoard';
import { getToken } from '../../utils';
import ColumnList from '../column/columnList';
import BoardControls from './controls';
import Modal from './modal';

const Board = () => {
  const [modalActive, setModalActive] = useState(false);
  const { board } = useAppSelector((state) => state.boardReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = getToken();
    token && dispatch(getBoard({ boardId: '66fef433-3dcc-4501-9bbd-e990dab1c68e', token: token }));
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
