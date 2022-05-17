import { Grid, Box } from '@mui/material';
import ColumnFooter from './columnFooter';
import ColumnHeader from './columnHeader';
import { column } from '../../styles/styledBoard';
import TaskList from '../task/taskList';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { ColumnResponse } from '../../types/types';
import { storeSlice } from '../../store/reducers/storeSlice';

const BoardColumn = ({ col }: { col: ColumnResponse }) => {
  const { tasks } = useAppSelector((state) => state.boardReducer);
  const { setColumnId, setColOrder } = storeSlice.actions;
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setColumnId(col.id));
    dispatch(setColOrder(col.order));
  };

  return (
    <Grid container direction="column" sx={column.column} onClick={handleClick}>
      <ColumnHeader title={col.title} />
      <Box sx={column.columnInner}>{tasks && <TaskList tasks={tasks} />}</Box>
      <ColumnFooter />
    </Grid>
  );
};

export default BoardColumn;
