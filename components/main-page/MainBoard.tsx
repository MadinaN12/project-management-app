import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/MainPage.module.scss';
import { Board, PropMain } from '../../types/Types';
import { useDispatch } from 'react-redux';
import { addBoard } from '../../stores/boards/slices';
import { useEffect, useState } from 'react';
import DeleteBoardPopUp from './DeleteBoardPopUp';
import Link from 'next/link';

export default function MainBoard({ board }: PropMain) {
  const [statusPop, setStatusPop] = useState(false);
  const dispatch = useDispatch();

  const handleClickBin = () => setStatusPop(true);

  useEffect(() => {
    dispatch(addBoard(board));
  }, []);

  return (
    <Link href="/board">
      <div className={styles.board}>
        <h5>{(board as Board).title}</h5>
        {/* <FontAwesomeIcon icon={faStar} className={styles.star} /> */}
        <FontAwesomeIcon icon={faTrash} className={styles.trash} onClick={handleClickBin} />
        {statusPop ? <DeleteBoardPopUp setStatus={setStatusPop} board={board as Board} /> : ''}
      </div>
    </Link>
  );
}
