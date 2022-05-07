import { Button } from '@mui/material';
import { createColumn } from '../../pages/api/createColumn';
import styles from '../../styles/board/Board.module.css';
import Logo from '../Logo';

const BoardControls = () => {
  const handleClick = async () => {
    const column = {
      title: 'First',
      order: 1,
    };
    await createColumn(column);
  };

  return (
    <header className={styles.header}>
      <Logo />
      <Button variant="contained" onClick={handleClick}>
        + add column
      </Button>
    </header>
  );
};

export default BoardControls;
