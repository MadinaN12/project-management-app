import { Grid, Box } from '@mui/material';
import ColumnFooter from './columnFooter';
import ColumnHeader from './columnHeader';
import TaskList from '../task/taskList';
import { useAppDispatch } from '../../hooks/redux';
import { storeSlice } from '../../store/reducers/storeSlice';
import { column } from '../../styles/board/styledBoard';
import { ColumnProps, Item, ItemTypes } from '../../types/dndTypes';
import { useDrag, useDrop } from 'react-dnd';
import { getToken } from '../../utils';
import { useRouter } from 'next/router';
import { updateColumn } from '../../api/column/updateColumn';
import { getBoard } from '../../api/board/getBoard';

const BoardColumn = ({ col, order, atOrder, moveCard, findCard }: ColumnProps) => {
  const dispatch = useAppDispatch();
  const { setColumnId, setColOrder } = storeSlice.actions;
  const router = useRouter();
  const { id } = router.query;

  const updateOrder = async (droppedId: number) => {
    const token = getToken();
    if (token && id) {
      const column = {
        title: col.title,
        order: droppedId + 1,
      };
      await updateColumn(column, col.id, id, token);
      await dispatch(getBoard({ boardId: id, token: token }));
    }
  };

  const originalIndex = findCard(order).index;
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.COLUMN,
      item: { order, originalIndex },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const { order: droppedId, originalIndex } = item;
        const didDrop = monitor.didDrop();
        if (!didDrop) {
          moveCard(droppedId, originalIndex);
        }
        if (didDrop) {
          updateOrder(atOrder);
        }
      },
    }),
    [order, originalIndex, moveCard]
  );

  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.COLUMN,
      hover({ order: draggedId }: Item) {
        if (draggedId !== order) {
          const { index: overIndex } = findCard(order);
          moveCard(draggedId, overIndex);
        }
      },
    }),
    [findCard, moveCard]
  );

  const opacity = isDragging ? 0 : 1;

  const handleClick = () => {
    dispatch(setColumnId(col.id));
    dispatch(setColOrder(col.order));
  };

  return (
    <Grid
      container
      direction="column"
      sx={column.column}
      style={{ opacity: opacity }}
      onClick={handleClick}
      ref={(node) => drag(drop(node))}
    >
      <ColumnHeader title={col.title} />
      <Box sx={column.columnInner}>{<TaskList col={col} />}</Box>
      <ColumnFooter />
    </Grid>
  );
};

export default BoardColumn;
