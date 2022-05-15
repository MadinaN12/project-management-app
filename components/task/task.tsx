import { Grid, Paper } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { storeSlice } from '../../store/reducers/storeSlice';
import { task } from '../../styles/styledTask';
import TaskControls from './taskControls';

const Task = ({ title }: { title: string }) => {
  const { setTaskId } = storeSlice.actions;
  const dispatch = useAppDispatch();
  const { taskId } = useAppSelector((state) => state.boardReducer);

  const handleClick = (title: string) => {
    dispatch(setTaskId(title));
    console.log(taskId);
  };

  return (
    <Paper sx={task.task} onClick={() => handleClick(title)}>
      <Grid container sx={{ justifyContent: 'space-between' }}>
        {title}
        <TaskControls />
      </Grid>
    </Paper>
  );
};

export default Task;
