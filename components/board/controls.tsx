import { AppBar, Button, Toolbar } from '@mui/material';
import { useState } from 'react';
import Modal from './modal';
import Logo from '../Logo';
import { useRouter } from 'next/router';

const BoardControls = () => {
  const [modalActive, setModalActive] = useState(false);
  const router = useRouter();

  return (
    <>
      <AppBar sx={{ bgcolor: '#bbdefb', maxHeight: '55px' }} position="static">
        <Toolbar variant="dense">
          <Logo width={126} height={36} onClick={() => router.push('/')} />
          <Button variant="contained" onClick={() => setModalActive(true)} sx={{ m: 1 }}>
            + add column
          </Button>
        </Toolbar>
      </AppBar>
      <Modal active={modalActive} setActive={setModalActive} />
    </>
  );
};

export default BoardControls;
