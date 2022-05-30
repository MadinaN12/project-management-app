import { Grid, Paper } from '@mui/material';
import { useAppDispatch } from '../../hooks/redux';
import { storeSlice } from '../../store/reducers/storeSlice';
import { task } from '../../styles/board/styledTask';
import { TaskProps } from '../../types/types';
import TaskControls from './taskControls';

const Task = ({ tasks }: { tasks: TaskProps }) => {
  const dispatch = useAppDispatch();
  const { setTaskId, setTaskOrder } = storeSlice.actions;

  const handleClick = () => {
    dispatch(setTaskId(tasks.id));
    dispatch(setTaskOrder(tasks.order));
  };

  return (
    <Paper sx={task.task} onClick={handleClick}>
      <Grid container sx={{ justifyContent: 'space-between' }}>
        {tasks.title}
        <TaskControls tasks={tasks} />
      </Grid>
    </Paper>
  );
};

export default Task;
