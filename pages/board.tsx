import { Grid } from '@mui/material';
import BoardColumn from '../components/column/column';
import BoardControls from '../components/board/controls';
import { useAppSelector } from '../hooks/redux';

const Board = () => {
  const { columns } = useAppSelector((state) => state.boardReducer);

  const gridSx = {
    gap: 2,
    backgroundColor: '#448aff',
    flexWrap: 'nowrap',
    maxWidth: '100vw',
    overflow: 'auto',
  };

  return (
    <Grid container sx={{ backgroundColor: '#448aff', height: '100vh' }}>
      <BoardControls />
      <Grid container sx={gridSx}>
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
