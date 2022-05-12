import { Button, Grid } from '@mui/material';
import ConfirmModal from './confirmModal';
import { useState } from 'react';
import { column } from '../../styles/styledBoard';

const ColumnFooter = ({ title }: { title: string }) => {
  const [modalActive, setModalActive] = useState(false);

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
      </Grid>
      <ConfirmModal title={title} active={modalActive} setActive={setModalActive} />
    </>
  );
};

export default ColumnFooter;
