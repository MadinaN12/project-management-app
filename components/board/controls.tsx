import { AppBar, Toolbar } from '@mui/material';
import Logo from '../Logo';
import { useRouter } from 'next/router';

const BoardControls = () => {
  const router = useRouter();

  return (
    <AppBar sx={{ bgcolor: '#bbdefb', maxHeight: '55px' }} position="static">
      <Toolbar variant="dense">
        <Logo width={126} height={36} onClick={() => router.push('/')} />
      </Toolbar>
    </AppBar>
  );
};

export default BoardControls;
