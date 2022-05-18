import { Grid } from '@mui/material';
import { task } from '../../styles/styledTask';
import Task from './task';
import { Col } from '../../types/types';

const TaskList = ({ col }: { col: Col }) => {
  return (
    <Grid container sx={task.taskGrid}>
      {col.tasks.map(({ id, title }) => (
        <Task key={id} title={title} />
      ))}
    </Grid>
  );
};

export default TaskList;
