import { Grid, Paper } from '@mui/material';
import { task } from '../../styles/styledTask';
import TaskControls from './taskControls';

const Task = ({ title }: { title: string }) => {
  const handleClick = () => {
    //dispatch(setTaskId(title));
  };

  return (
    <Paper sx={task.task} onClick={handleClick}>
      <Grid container sx={{ justifyContent: 'space-between' }}>
        {title}
        <TaskControls />
      </Grid>
    </Paper>
  );
};

export default Task;
