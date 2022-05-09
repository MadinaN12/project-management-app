import { Grid, Paper } from '@mui/material';
import style from '../../styles/Column.module.css';
import ColumnTitle from './title';

const BoardColumn = ({ title }: { title: string }) => {
  return (
    <Grid container direction="column" className={style.columnGrid}>
      <ColumnTitle title={title} />
      <Paper className={style.column}>
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
    </Grid>
  );
};

export default BoardColumn;
