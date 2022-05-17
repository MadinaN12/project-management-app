import { Button, Grid } from '@mui/material';
import ConfirmModal from './confirmModal';
import TaskModal from '../task/createTask';
import { useState } from 'react';
import { column } from '../../styles/styledBoard';

const ColumnFooter = () => {
  const [modalActive, setModalActive] = useState(false);
  const [taskModalActive, setTaskModalActive] = useState(false);

  return (
    <>
      <Grid container sx={column.bottom}>
        <Button
          variant="contained"
          sx={column.btn}
          color="error"
          onClick={() => setModalActive(true)}
        >
          Delete
        </Button>
        <Button variant="contained" sx={column.btn} onClick={() => setTaskModalActive(true)}>
          + Add task
        </Button>
      </Grid>
      <ConfirmModal active={modalActive} setActive={setModalActive} />
      <TaskModal active={taskModalActive} setActive={setTaskModalActive} />
    </>
  );
};

export default ColumnFooter;
