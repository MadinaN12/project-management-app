import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/MainPage.module.scss';

export interface Prop {
  name?: string;
  board?: Board;
}

type Board = {
  name?: string;
};

export default function MainBoard({ board = { name: 'Board' } }: Prop) {
  return (
    <>
      <div className={styles.board}>
        <h5>{board.name}</h5>
        <FontAwesomeIcon icon={faStar} className={styles.star} />
        <FontAwesomeIcon icon={faTrash} className={styles.trash} />
      </div>
    </>
  );
}
