import { IconButton, Toolbar } from '@mui/material';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const BoardControls = () => {
  const router = useRouter();

  return (
    <Toolbar variant="dense" sx={{ padding: '10px' }}>
      <IconButton size="medium" sx={{ color: 'white' }} onClick={() => router.push('/boards')}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </IconButton>
    </Toolbar>
  );
};

export default BoardControls;
