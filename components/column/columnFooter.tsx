import { Button, Grid } from '@mui/material';
import ConfirmModal from './confirmModal';
import TaskModal from '../task/createTask';
import { useState } from 'react';
import { column } from '../../styles/board/styledBoard';

const ColumnFooter = () => {
  const [modalActive, setModalActive] = useState(false);
  const [taskModalActive, setTaskModalActive] = useState(false);

  return (
    <>
      <Grid container sx={column.bottom}>
        <Button
          variant="outlined"
          color="error"
          sx={column.btn}
          onClick={() => setModalActive(true)}
        >
          Delete
        </Button>
        <Button variant="outlined" sx={column.bigBtn} onClick={() => setTaskModalActive(true)}>
          + Add task
        </Button>
      </Grid>
      <ConfirmModal active={modalActive} setActive={setModalActive} />
      <TaskModal active={taskModalActive} setActive={setTaskModalActive} />
    </>
  );
};

export default ColumnFooter;
