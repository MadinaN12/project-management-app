import { Grid, Paper } from '@mui/material';
import { TaskResponse } from '../../types/types';
import { task } from '../../styles/styledTask';

const TaskList = ({ tasks }: { tasks: TaskResponse[] }) => {
  return (
    <Grid container sx={task.taskGrid}>
      {tasks.map(({ id, title }) => (
        <Paper key={id} sx={task.task}>
          {title}
        </Paper>
      ))}
    </Grid>
  );
};

export default TaskList;
