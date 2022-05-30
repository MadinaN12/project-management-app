import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { loading } from '../styles/board/loading';

const Loading = () => {
  return (
    <Box sx={loading}>
      <CircularProgress />
    </Box>
  );
};

export default Loading;
