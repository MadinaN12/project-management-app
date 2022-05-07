import { Grid } from '@mui/material';
import BoardControls from '../components/board/controls';
import styles from '../styles/board/Board.module.css';

const Board = () => {
  return (
    <>
      <BoardControls />
      <main>
        <Grid className={styles.grid} container spacing={2}>
          <Grid item>1 column</Grid>
          <Grid item>2 column</Grid>
          <Grid item>3 column</Grid>
          <Grid item>4 column</Grid>
        </Grid>
      </main>
    </>
  );
};

export default Board;
