import { Grid, Paper } from '@mui/material';
import { TaskResponse } from '../../types/types';

const TaskList = ({ tasks }: { tasks: TaskResponse[] }) => {
  return (
    <Grid container sx={{ flexDirection: 'column', gap: 1, padding: 1 }}>
      {tasks.map(({ id, title }) => (
        <Paper key={id} sx={{ backgroundColor: 'white', width: '100%', padding: 1 }}>
          {title}
        </Paper>
      ))}
    </Grid>
  );
};

export default TaskList;
