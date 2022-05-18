import { Grid, Paper } from '@mui/material';
import { task } from '../../styles/styledTask';
import { TaskProps } from '../../types/types';
import TaskControls from './taskControls';

const Task = ({ tasks }: { tasks: TaskProps }) => {
  return (
    <Paper sx={task.task}>
      <Grid container sx={{ justifyContent: 'space-between' }}>
        {tasks.title}
        <TaskControls tasks={tasks} />
      </Grid>
    </Paper>
  );
};

export default Task;
