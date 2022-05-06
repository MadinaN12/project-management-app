import Link from 'next/link';
import styles from '../styles/Form.module.scss';

interface IForm {
  isFull: boolean;
  email: string;
}
const Form: React.FC<IForm> = ({ isFull, email }) => {
  return (
    <form action="" className={styles.formAuth}>
      <h2 className={styles.title}>{isFull ? 'Sign up to Trello' : 'Log in to Trello'}</h2>
      <input type="text" placeholder="Enter email" className={styles.input} defaultValue={email} />
      {isFull ? <input type="text" placeholder="Enter name" className={styles.input} /> : <></>}
      <input type="password" placeholder="Enter password" className={styles.input} />
      {isFull ? (
        <input type="password" placeholder="Re-enter password" className={styles.input} />
      ) : (
        <></>
      )}
      <button
        type="submit"
        className={isFull ? `${styles.submitBtn} ${styles.signup}` : `${styles.submitBtn}`}
      >
        {isFull ? 'Sign up' : 'Log in'}
      </button>
      <hr className={styles.separateLine} />
      {isFull ? (
        <ul className={styles.formLinks}>
          <li className={styles.formLinkText}>Already have an account ?</li>
          <li className={styles.formLinkText}>
            <Link href={'/login'}>Log in</Link>
          </li>
        </ul>
      ) : (
        <ul className={styles.formLinks}>
          <li className={styles.formLinkText}>Don't have an account ?</li>
          <li className={styles.formLinkText}>
            <Link href={'/signup'}>Sign up</Link>
          </li>
        </ul>
      )}
    </form>
  );
};

export default Form;
