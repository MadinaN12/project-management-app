import { Button, Grid } from '@mui/material';
import ConfirmModal from './confirmModal';
import TaskModal from '../task/createTask';
import { useState } from 'react';
import { column } from '../../styles/board/styledBoard';
import { en } from '../../public/locales/en/common';
import { ru } from '../../public/locales/ru/common';
import { useRouter } from 'next/router';

const ColumnFooter = () => {
  const [modalActive, setModalActive] = useState(false);
  const [taskModalActive, setTaskModalActive] = useState(false);
  const router = useRouter();
  const t = router.locale === 'en' ? en : ru;

  return (
    <>
      <Grid container sx={column.bottom}>
        <Button
          variant="outlined"
          color="error"
          sx={column.btn}
          onClick={() => setModalActive(true)}
        >
          {t.board.deleteBtn}
        </Button>
        <Button variant="outlined" sx={column.bigBtn} onClick={() => setTaskModalActive(true)}>
          {t.board.addTask}
        </Button>
      </Grid>
      <ConfirmModal active={modalActive} setActive={setModalActive} />
      <TaskModal active={taskModalActive} setActive={setTaskModalActive} />
    </>
  );
};

export default ColumnFooter;
