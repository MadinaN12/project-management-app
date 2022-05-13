import { Grid, Paper } from '@mui/material';
import { task } from '../../styles/styledTask';
import TaskControls from './taskControls';

const Task = ({ title }: { title: string }) => {
  return (
    <Paper sx={task.task}>
      <Grid container sx={{ justifyContent: 'space-between' }}>
        {title}
        <TaskControls title={title} />
      </Grid>
    </Paper>
  );
};

export default Task;
