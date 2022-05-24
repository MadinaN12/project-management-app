import { Button, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import { getBoard } from '../../api/board/getBoard';
import BoardControls from '../../components/board/controls';
import Modal from '../../components/board/modal';
import ColumnList from '../../components/column/columnList';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { column } from '../../styles/board/styledBoard';
import { Col } from '../../types/types';
import { getToken } from '../../utils';
import update from 'immutability-helper';
import { ItemTypes } from '../../types/dndTypes';

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

  const [cards, setCards] = useState<Col[]>(board.columns);
  const [order, setOrder] = useState<number>(1);
  const findCard = useCallback(
    (order: number) => {
      const card = cards.filter((c) => c.order === order)[0] as Col;
      return {
        card,
        index: cards.indexOf(card),
      };
    },
    [cards]
  );

  const moveCard = useCallback(
    (order: number, atIndex: number) => {
      const { card, index } = findCard(order);
      setOrder(atIndex);
      setCards(
        update(cards, {
          $splice: [
            [index, 1],
            [atIndex, 0, card],
          ],
        })
      );
    },
    [findCard, cards, setCards]
  );

  const [, drop] = useDrop(() => ({ accept: ItemTypes.COLUMN }));

  return (
    <>
      <Grid container sx={{ backgroundColor: '#448aff', height: '100vh' }}>
        <BoardControls />
        <Grid container sx={column.boardGrid} ref={drop}>
          <ColumnList columns={cards} atOrder={order} moveCard={moveCard} findCard={findCard} />
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
