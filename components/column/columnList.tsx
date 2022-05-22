import { Grid } from '@mui/material';
import { Col } from '../../types/types';
import BoardColumn from './column';

const ColumnList = ({ columns }: { columns: Col[] }) => {
  return (
    <>
      {columns.map((item) => (
        <Grid key={item.id} item>
          <BoardColumn col={item} />
        </Grid>
      ))}
    </>
  );
};

export default ColumnList;
