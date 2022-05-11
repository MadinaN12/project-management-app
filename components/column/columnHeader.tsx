import { Grid } from '@mui/material';
import Title from './title';

const ColumnHeader = ({ title }: { title: string }) => {
  const columnSx = {
    displayFlex: 'space-between',
    justifyContent: 'space-between',
    alignItems: 'self-end',
    m: '5px 0 5px 0',
    minWidth: '50px',
    flexWrap: 'nowrap',
  };

  return (
    <Grid container sx={columnSx}>
      <Title title={title} />
    </Grid>
  );
};

export default ColumnHeader;
