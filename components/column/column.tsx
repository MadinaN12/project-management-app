import { Grid, Box } from '@mui/material';
import ColumnFooter from './columnFooter';
import ColumnHeader from './columnHeader';
import TaskList from '../task/taskList';
import { Col } from '../../types/types';
import { useAppDispatch } from '../../hooks/redux';
import { storeSlice } from '../../store/reducers/storeSlice';
import { column } from '../../styles/board/styledBoard';

const BoardColumn = ({ col }: { col: Col }) => {
  const dispatch = useAppDispatch();
  const { setColumnId, setColOrder } = storeSlice.actions;

  const handleClick = () => {
    dispatch(setColumnId(col.id));
    dispatch(setColOrder(col.order));
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
