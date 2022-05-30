import { Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useAppSelector } from '../../hooks/redux';
import { column } from '../../styles/board/styledBoard';
import { en } from '../../public/locales/en/common';
import { ru } from '../../public/locales/ru/common';

const BoardControls = () => {
  const router = useRouter();
  const { board } = useAppSelector((state) => state.boardReducer);
  const t = router.locale === 'en' ? en : ru;

  return (
    <Grid container direction="row">
      <Toolbar variant="dense" sx={column.toolbar}>
        <IconButton size="medium" sx={{ color: 'white' }} onClick={() => router.push('/boards')}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </IconButton>
      </Toolbar>
      <Typography variant="h5" sx={column.boardTitle} gutterBottom component="div">
        {t.board.boardTitle}: {board.title}
      </Typography>
    </Grid>
  );
};

export default BoardControls;
