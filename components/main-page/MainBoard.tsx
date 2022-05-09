import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/MainPage.module.scss';
import { Board, PropMain } from '../../types/types';
import { useDispatch } from 'react-redux';
import { addBoard } from '../../stores/boards/slices';
import { useEffect, useState } from 'react';
import DeleteBoardPopUp from './DeleteBoardPopUp';
import Link from 'next/link';
import { Typography } from '@mui/material';

export default function MainBoard({ board }: PropMain) {
  const [statusPop, setStatusPop] = useState(false);
  const dispatch = useDispatch();

  const handleClickBin = () => setStatusPop(true);

  const titleStyle = { fontSize: 16, fontWeight: '700', cursor: 'pointer' };

  useEffect(() => {
    dispatch(addBoard(board));
  }, [dispatch]);

  return (
    <>
      <div className={styles.board}>
        <Link href={'/board'}>
          <Typography variant="h5" sx={titleStyle}>
            {(board as Board).title}
          </Typography>
        </Link>
        {/* <FontAwesomeIcon icon={faStar} className={styles.star} /> */}
        <FontAwesomeIcon icon={faTrash} className={styles.trash} onClick={handleClickBin} />
        {statusPop ? <DeleteBoardPopUp setStatus={setStatusPop} board={board as Board} /> : ''}
      </div>
    </>
  );
}
