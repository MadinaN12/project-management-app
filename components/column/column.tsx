import { Grid, Box } from '@mui/material';
import ColumnFooter from './columnFooter';
import ColumnHeader from './columnHeader';
import { column } from '../../styles/styledBoard';
import TaskList from '../task/taskList';
import { Col } from '../../types/types';

const BoardColumn = ({ col }: { col: Col }) => {
  const handleClick = () => {
    //dispatch(setColumnId(col.id));
    //dispatch(setColOrder(col.order));
  };

  return (
    <Grid container direction="column" sx={column.column} onClick={handleClick}>
      <ColumnHeader title={col.title} />
      <Box sx={column.columnInner}>{<TaskList col={col} />}</Box>
      <ColumnFooter />
    </Grid>
  );
};

export default BoardColumn;
