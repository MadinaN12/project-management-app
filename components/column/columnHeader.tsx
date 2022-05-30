import { Grid } from '@mui/material';
import { column } from '../../styles/board/styledBoard';
import Title from './title';

const ColumnHeader = ({ title }: { title: string }) => {
  return (
    <Grid container sx={column.header}>
      <Title title={title} />
    </Grid>
  );
};

export default ColumnHeader;
