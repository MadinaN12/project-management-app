import { AppBar, Button, Toolbar } from '@mui/material';
import { useState } from 'react';
import Modal from './modal';
import Logo from '../Logo';

const BoardControls = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <header>
        <AppBar sx={{ bgcolor: '#bbdefb' }} position="static">
          <Toolbar variant="dense">
            <Logo />
            <Button variant="contained" onClick={() => setModalActive(true)} sx={{ margin: 1 }}>
              + add column
            </Button>
          </Toolbar>
        </AppBar>
      </header>
      <Modal active={modalActive} setActive={setModalActive} />
    </>
  );
};

export default BoardControls;
