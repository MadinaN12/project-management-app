import { Grid } from '@mui/material';
import { task } from '../../styles/styledTask';
import Task from './task';
import { Col } from '../../types/types';

const TaskList = ({ col }: { col: Col }) => {
  return (
    <Grid container sx={task.taskGrid}>
      {col.tasks.map((item) => (
        <Task key={item.id} tasks={item} />
      ))}
    </Grid>
  );
};

export default TaskList;
