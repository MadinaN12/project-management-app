import { Grid, IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import ConfirmModal from './confirmModal';
import { useState } from 'react';
import Title from './title';

const ColumnHeader = ({ title }: { title: string }) => {
  const [modalActive, setModalActive] = useState(false);

  const columnSx = {
    displayFlex: 'space-between',
    justifyContent: 'space-between',
    alignItems: 'self-end',
    m: '5px 0 5px 0',
  };

  return (
    <>
      <Grid container sx={columnSx}>
        <Title title={title} />
        <IconButton aria-label="delete" size="small" onClick={() => setModalActive(true)}>
          <FontAwesomeIcon icon={faTrash} />
        </IconButton>
      </Grid>
      <ConfirmModal title={title} active={modalActive} setActive={setModalActive} />
    </>
  );
};

export default ColumnHeader;
