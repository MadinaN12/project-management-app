import { Grid, Paper } from '@mui/material';
import { useDrag, useDrop } from 'react-dnd';
import { useAppDispatch } from '../../hooks/redux';
import { storeSlice } from '../../store/reducers/storeSlice';
import { task } from '../../styles/board/styledTask';
import { ItemTypes } from '../../types/dndTypes';
import { CardProps, Item } from '../../types/dndTypes';
import TaskControls from './taskControls';
import { getToken } from '../../utils';
import { useRouter } from 'next/router';
import { getTaskById } from '../../api/task/getTaskById';
import { updateTask } from '../../api/task/updateTask';
import { getBoard } from '../../api/board/getBoard';

export const Task = ({ colId, order, atOrder, tasks, moveCard, findCard }: CardProps) => {
  const dispatch = useAppDispatch();
  const { setTaskId, setTaskOrder } = storeSlice.actions;
  const router = useRouter();
  const { id } = router.query;

  const updateOrder = async (droppedId: number) => {
    const token = getToken();
    if (token && id) {
      const task = await getTaskById(id, colId, tasks.id, token);
      delete task.id;
      delete task.files;
      task.order = droppedId + 1;
      await updateTask(task, colId, tasks.id, id, token);
      await dispatch(getBoard({ boardId: id, token: token }));
    }
  };

  const originalIndex = findCard(order).index;
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.TASK,
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
      accept: ItemTypes.TASK,
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
    dispatch(setTaskId(tasks.id));
    dispatch(setTaskOrder(tasks.order));
  };

  return (
    <Paper
      sx={task.task}
      style={{ opacity: opacity }}
      onClick={handleClick}
      ref={(node) => drag(drop(node))}
    >
      <Grid container sx={{ justifyContent: 'space-between' }}>
        {tasks.title}
        <TaskControls tasks={tasks} />
      </Grid>
    </Paper>
  );
};

export default Task;
