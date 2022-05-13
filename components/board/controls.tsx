import { AppBar, Button, Toolbar } from '@mui/material';
import { useRouter } from 'next/router';
import { useAppDispatch } from '../../hooks/redux';
import { createColumn } from '../../pages/api/createColumn';
import { storeSlice } from '../../store/reducers/storeSlice';
import Logo from '../Logo';

const BoardControls = () => {
  const { setColumns } = storeSlice.actions;
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleClick = () => {
    const column = {
      title: 'First',
      order: 1,
    };
    const res = createColumn(column);
    res && dispatch(setColumns(res));
  };

  return (
    <header>
      <AppBar sx={{ bgcolor: '#bbdefb' }} position="static">
        <Toolbar variant="dense">
          <Logo width={126} height={36} onClick={() => router.push('/')} />
          <Button variant="contained" onClick={handleClick} sx={{ margin: 1 }}>
            + add column
          </Button>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default BoardControls;
