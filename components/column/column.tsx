import { Grid, Paper } from '@mui/material';
import ColumnFooter from './columnFooter';
import ColumnHeader from './columnHeader';
import { column } from '../../styles/styledBoard';

const BoardColumn = ({ title }: { title: string }) => {
  return (
    <Grid container direction="column" sx={column.column}>
      <ColumnHeader title={title} />
      <Paper sx={column.columnInner}>
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
