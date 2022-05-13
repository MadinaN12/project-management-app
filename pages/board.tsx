import { Grid } from '@mui/material';
import BoardColumn from '../components/column/column';
import BoardControls from '../components/board/controls';
import { useAppSelector } from '../hooks/redux';
import { column } from '../styles/styledBoard';

const Board = () => {
  const { columns } = useAppSelector((state) => state.boardReducer);

  return (
    <Grid container sx={{ backgroundColor: '#448aff', height: '100vh' }}>
      <BoardControls />
      <Grid container sx={column.boardGrid}>
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
