import { Grid } from '@mui/material';
import BoardControls from '../components/board/controls';
import { useAppSelector } from '../hooks/redux';

const Board = () => {
  const { columns } = useAppSelector((state) => state.boardReducer);
  return (
    <>
      <BoardControls />
      <main>
        <Grid container spacing={2}>
          {columns.map(({ id, title }) => {
            return (
              <Grid key={id} item>
                {title}
              </Grid>
            );
          })}
        </Grid>
      </main>
    </>
  );
};

export default Board;
