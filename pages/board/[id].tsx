import { Button, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { getBoard } from '../../api/board/getBoard';
import BoardControls from '../../components/board/controls';
import Modal from '../../components/board/modal';
import ColumnList from '../../components/column/columnList';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { column } from '../../styles/board/styledBoard';
import { getToken } from '../../utils';

const Board = () => {
  const [modalActive, setModalActive] = useState(false);
  const { board } = useAppSelector((state) => state.boardReducer);
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = getToken();
    token && id && dispatch(getBoard({ boardId: id, token: token }));
  }, [dispatch, id]);

  return (
    <DndProvider backend={HTML5Backend}>
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
    </DndProvider>
  );
};

export default Board;
