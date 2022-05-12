import { Grid } from '@mui/material';
import Title from './title';
import { column } from '../../styles/styledBoard';

const ColumnHeader = ({ title }: { title: string }) => {
  return (
    <Grid container sx={column.header}>
      <Title title={title} />
    </Grid>
  );
};

export default ColumnHeader;
