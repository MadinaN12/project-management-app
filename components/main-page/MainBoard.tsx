import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/MainPage.module.scss';
import { Board, PropMain } from '../../types/types';
import { useDispatch } from 'react-redux';
import { addBoard } from '../../stores/boards/slices';
import { useEffect, useState } from 'react';
import DeleteBoardPopUp from './DeleteBoardPopUp';
import { Typography } from '@mui/material';
import { storeSlice } from '../../store/reducers/storeSlice';
import { useRouter } from 'next/router';
import { useAppDispatch } from '../../hooks/redux';

export default function MainBoard({ board }: PropMain) {
  const [statusPop, setStatusPop] = useState(false);
  const dispatch = useDispatch();
  const { setBoardId } = storeSlice.actions;
  const dispatchBoard = useAppDispatch();
  const router = useRouter();

  const handleClickBin = () => setStatusPop(true);

  const titleStyle = { fontSize: 16, fontWeight: '700', cursor: 'pointer' };

  const handleClick = () => {
    dispatchBoard(setBoardId(board?.id as string));
    router.push('/board');
  };

  useEffect(() => {
    dispatch(addBoard(board));
  }, [board, dispatch]);

  return (
    <figure className={styles.board} onClick={handleClick}>
      <Typography variant="h5" sx={titleStyle}>
        {(board as Board).title}
      </Typography>
      <FontAwesomeIcon icon={faTrash} className={styles.trash} onClick={handleClickBin} />
      {statusPop && <DeleteBoardPopUp setStatus={setStatusPop} board={board as Board} />}
    </figure>
  );
}
