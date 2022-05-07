import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/MainPage.module.scss';
import { Board, PropMain } from '../../types/Types';

export default function MainBoard({ board }: PropMain) {
  return (
    <>
      <div className={styles.board}>
        <h5>{(board as Board).title}</h5>
        <FontAwesomeIcon icon={faStar} className={styles.star} />
        <FontAwesomeIcon icon={faTrash} className={styles.trash} />
      </div>
    </>
  );
}
