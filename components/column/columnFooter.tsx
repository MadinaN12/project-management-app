import { Button, Grid } from '@mui/material';
import ConfirmModal from './confirmModal';
import { useState } from 'react';

const ColumnFooter = ({ title }: { title: string }) => {
  const [modalActive, setModalActive] = useState(false);

  const columnSx = {
    displayFlex: 'space-between',
    justifyContent: 'space-between',
    alignItems: 'self-end',
    m: '5px 0 5px 0',
  };

  const btnSx = {
    fontSize: '10px',
    maxWidth: '20px',
    padding: '6px 0px',
  };

  return (
    <>
      <Grid container sx={columnSx}>
        <Button variant="contained" sx={btnSx} color="error" onClick={() => setModalActive(true)}>
          Delete
        </Button>
      </Grid>
      <ConfirmModal title={title} active={modalActive} setActive={setModalActive} />
    </>
  );
};

export default ColumnFooter;
