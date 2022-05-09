import { Grid } from '@mui/material';
import BoardColumn from '../components/column/column';
import BoardControls from '../components/board/controls';
import { useAppSelector } from '../hooks/redux';

const Board = () => {
  const { columns } = useAppSelector((state) => state.boardReducer);
  return (
    <Grid container>
      <BoardControls />
      <Grid container sx={{ gap: 2, backgroundColor: '#448aff' }}>
        {columns.map(({ id, title }) => (
          <Grid key={id} item>
            <BoardColumn title={title} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Board;
