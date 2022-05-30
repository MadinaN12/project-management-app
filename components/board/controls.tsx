import { Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useAppSelector } from '../../hooks/redux';
import { column } from '../../styles/board/styledBoard';

const BoardControls = () => {
  const router = useRouter();
  const { board } = useAppSelector((state) => state.boardReducer);

  return (
    <Grid container direction="row">
      <Toolbar variant="dense" sx={column.toolbar}>
        <IconButton size="medium" sx={{ color: 'white' }} onClick={() => router.push('/boards')}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </IconButton>
      </Toolbar>
      <Typography variant="h5" sx={column.boardTitle} gutterBottom component="div">
        Board title: {board.title}
      </Typography>
    </Grid>
  );
};

export default BoardControls;
