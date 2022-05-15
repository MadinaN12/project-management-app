import { Grid, Paper } from '@mui/material';
import { useAppDispatch } from '../../hooks/redux';
import { storeSlice } from '../../store/reducers/storeSlice';
import { task } from '../../styles/styledTask';
import TaskControls from './taskControls';

const Task = ({ title }: { title: string }) => {
  const { setTaskId } = storeSlice.actions;
  const dispatch = useAppDispatch();

  const handleClick = (title: string) => {
    dispatch(setTaskId(title));
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
