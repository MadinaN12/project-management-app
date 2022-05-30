import Task from './task';
import { Col, TaskProps } from '../../types/types';
import { useCallback, useEffect, useState } from 'react';
import { task } from '../../styles/board/styledTask';
import { Grid } from '@mui/material';
import update from 'immutability-helper';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../../types/dndTypes';
import { sortTasks } from '../../dndUtils.ts/tasksSort';

const TaskList = ({ col }: { col: Col }) => {
  const [cards, setCards] = useState(sortTasks(col.tasks));
  const [order, setOrder] = useState<number>(1);

  useEffect(() => {
    setCards(sortTasks(col.tasks));
  }, [col.tasks]);

  const findCard = useCallback(
    (order: number) => {
      const card = cards.filter((c) => c.order === order)[0] as TaskProps;
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

  const [, drop] = useDrop(() => ({ accept: ItemTypes.TASK }));

  return (
    <Grid container sx={task.taskGrid} ref={drop}>
      {cards.map((task) => (
        <Task
          key={task.id}
          colId={col.id}
          tasks={task}
          order={task.order}
          atOrder={order}
          moveCard={moveCard}
          findCard={findCard}
        />
      ))}
    </Grid>
  );
};

export default TaskList;
