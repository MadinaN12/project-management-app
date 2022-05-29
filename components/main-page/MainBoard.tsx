import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/MainPage.module.scss';
import { Board, PropMain } from '../../types/types';
import { useDispatch } from 'react-redux';
import { addBoard } from '../../stores/boards/slices';
import { useEffect, useState, MouseEvent } from 'react';
import DeleteBoardPopUp from './DeleteBoardPopUp';
import { useRouter } from 'next/router';
import { Typography } from '@mui/material';

export default function MainBoard({ board }: PropMain) {
  const [statusPop, setStatusPop] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClickBin = (e: MouseEvent<HTMLButtonElement> | unknown) => {
    (e as MouseEvent).stopPropagation();
    setStatusPop(true);
  };

  // dynanmic route here !!!
  const handleClickboard = (e: MouseEvent<HTMLButtonElement> | unknown) => {
    !statusPop ? router.push('/board') : '';
    (e as MouseEvent).stopPropagation();
  };

  const titleStyle = { fontSize: 16, fontWeight: '700', cursor: 'pointer' };

  useEffect(() => {
    dispatch(addBoard(board));
  }, [board, dispatch]);

  return (
    <>
      <figure className={styles.board} onClick={handleClickboard}>
        <Typography variant="h5" sx={titleStyle}>
          {(board as Board).title}
        </Typography>
        <FontAwesomeIcon icon={faTrash} className={styles.trash} onClick={handleClickBin} />
        {statusPop && <DeleteBoardPopUp setStatus={setStatusPop} board={board as Board} />}
      </figure>
    </>
  );
}
