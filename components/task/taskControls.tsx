import { Grid, IconButton, Tooltip } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import ConfirmTask from './confirmTask';
import { useState } from 'react';

const TaskControls = ({ title }: { title: string }) => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <Grid container sx={{ justifyContent: 'space-between', width: '30%' }}>
        <Tooltip title="Edit">
          <IconButton size="small">
            <FontAwesomeIcon icon={faPen} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete" onClick={() => setModalActive(true)}>
          <IconButton size="small">
            <FontAwesomeIcon icon={faTrashCan} />
          </IconButton>
        </Tooltip>
      </Grid>
      <ConfirmTask title={title} active={modalActive} setActive={setModalActive} />
    </>
  );
};

export default TaskControls;
