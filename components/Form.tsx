import styles from '../styles/Form.module.scss';

const Form = () => {
  return (
    <form action="" className={styles.formAuth}>
      <h2 className={styles.title}>Log in to Trello</h2>
      <input type="text" placeholder="Enter login" className={styles.input} />
      <input type="password" placeholder="Enter password" className={styles.input} />
      <button type="submit" className={styles.submitBtn}>
        Log in
      </button>
      <hr className={styles.separateLine} />
      <ul className={styles.formLinks}>
        <li className={styles.formLinkText}>Don't have an account ?</li>
        <li className={styles.formLinkText}>Sign Up</li>
      </ul>
    </form>
  );
};

export default Form;
