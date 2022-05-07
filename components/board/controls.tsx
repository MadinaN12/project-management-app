import { AppBar, Button, Toolbar } from '@mui/material';
import { createColumn } from '../../pages/api/createColumn';
import Logo from '../Logo';

const BoardControls = () => {
  const handleClick = () => {
    const column = {
      title: 'First',
      order: 1,
    };
    createColumn(column);
  };

  return (
    <header>
      <AppBar sx={{ bgcolor: '#bbdefb' }} position="static">
        <Toolbar variant="dense">
          <Logo />
          <Button variant="contained" onClick={handleClick} sx={{ margin: 1 }}>
            + add column
          </Button>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default BoardControls;
