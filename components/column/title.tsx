import { Grid, IconButton, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import ConfirmModal from './confirmModal';
import { useState } from 'react';

const ColumnTitle = ({ title }: { title: string }) => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <Grid container sx={{ displayFlex: 'space-between', justifyContent: 'space-between' }}>
        <Typography>{title}</Typography>
        <IconButton aria-label="delete" size="small" onClick={() => setModalActive(true)}>
          <FontAwesomeIcon icon={faTrash} />
        </IconButton>
      </Grid>
      <ConfirmModal title={title} active={modalActive} setActive={setModalActive} />
    </>
  );
};

export default ColumnTitle;
