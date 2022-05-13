import { Grid, Box } from '@mui/material';
import ColumnFooter from './columnFooter';
import ColumnHeader from './columnHeader';
import { column } from '../../styles/styledBoard';
import TaskList from '../task/taskList';
import { useAppSelector } from '../../hooks/redux';

const BoardColumn = ({ title }: { title: string }) => {
  const { tasks } = useAppSelector((state) => state.boardReducer);

  return (
    <Grid container direction="column" sx={column.column}>
      <ColumnHeader title={title} />
      <Box sx={column.columnInner}>{tasks && <TaskList tasks={tasks} />}</Box>
      <ColumnFooter title={title} />
    </Grid>
  );
};

export default BoardColumn;
