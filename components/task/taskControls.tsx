import { Grid, IconButton, Tooltip } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import ConfirmTask from './confirmTask';
import { useState } from 'react';
import UpdateTask from './updateTask';

const TaskControls = () => {
  const [confirmActive, setConfirmActive] = useState(false);
  const [updateActive, setUpdateActive] = useState(false);

  return (
    <>
      <Grid container sx={{ justifyContent: 'space-between', width: '30%' }}>
        <Tooltip title="Edit" onClick={() => setUpdateActive(true)}>
          <IconButton size="small">
            <FontAwesomeIcon icon={faPen} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete" onClick={() => setConfirmActive(true)}>
          <IconButton size="small">
            <FontAwesomeIcon icon={faTrashCan} />
          </IconButton>
        </Tooltip>
      </Grid>
      <ConfirmTask active={confirmActive} setActive={setConfirmActive} />
      <UpdateTask active={updateActive} setActive={setUpdateActive} />
    </>
  );
};

export default TaskControls;
