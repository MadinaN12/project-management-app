import { Grid } from '@mui/material';
import { TaskResponse } from '../../types/types';
import { task } from '../../styles/styledTask';
import Task from './task';

const TaskList = ({ tasks }: { tasks: TaskResponse[] }) => {
  return (
    <Grid container sx={task.taskGrid}>
      {tasks.map(({ id, title }) => (
        <Task key={id} title={title} />
      ))}
    </Grid>
  );
};

export default TaskList;
