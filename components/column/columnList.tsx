import { Grid } from '@mui/material';
import { Columns } from '../../types/dndTypes';
import BoardColumn from './column';

const ColumnList = ({ columns, atOrder, moveCard, findCard }: Columns) => {
  return (
    <>
      {columns.map((item) => (
        <Grid key={item.id} item>
          <BoardColumn
            col={item}
            order={item.order}
            atOrder={atOrder}
            moveCard={moveCard}
            findCard={findCard}
          />
        </Grid>
      ))}
    </>
  );
};

export default ColumnList;
