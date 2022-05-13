import { Grid, IconButton, Tooltip } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const TaskControls = () => {
  return (
    <Grid container sx={{ justifyContent: 'space-between', width: '30%' }}>
      <Tooltip title="Edit">
        <IconButton size="small">
          <FontAwesomeIcon icon={faPen} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete">
        <IconButton size="small">
          <FontAwesomeIcon icon={faTrashCan} />
        </IconButton>
      </Tooltip>
    </Grid>
  );
};

export default TaskControls;
