import { Grid, Paper } from '@mui/material';
import ColumnFooter from './columnFooter';
import ColumnHeader from './columnHeader';

const BoardColumn = ({ title }: { title: string }) => {
  const columSx = {
    minWidth: '272px',
    maxWidth: '272px',
    borderRadius: 2,
    boxShadow: 'none',
    margin: '0 8px 0 8px',
    backgroundColor: '#eceff1',
    padding: 1,
  };

  const columnInner = {
    maxHeight: 'calc(100vh - 200px)',
    overflow: 'auto',
  };

  return (
    <Grid container direction="column" sx={columSx}>
      <ColumnHeader title={title} />
      <Paper sx={columnInner}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus odit dicta enim at impedit
        velit commodi perspiciatis, earum aut fugiat veniam deserunt eos fugit laudantium, beatae
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus odit dicta enim at impedit
        velit commodi perspiciatis, earum aut fugiat veniam deserunt eos fugit laudantium, beatae
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus odit dicta enim at impedit
        velit commodi perspiciatis, earum aut fugiat veniam deserunt eos fugit laudantium, beatae
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus odit dicta enim at impedit
        velit commodi perspiciatis, earum aut fugiat veniam deserunt eos fugit laudantium, beatae
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus odit dicta enim at impedit
        velit commodi perspiciatis, earum aut fugiat veniam deserunt eos fugit laudantium, beatae
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus odit dicta enim at impedit
        velit commodi perspiciatis, earum aut fugiat veniam deserunt eos fugit laudantium, beatae
        incidunt, recusandae repellendus pariatur.
      </Paper>
      <ColumnFooter title={title} />
    </Grid>
  );
};

export default BoardColumn;
