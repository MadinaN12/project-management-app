import { Grid } from '@mui/material';
import BoardControls from '../components/board/controls';

const Board = () => {
  return (
    <>
      <BoardControls />
      <main>
        <Grid container spacing={2}>
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
