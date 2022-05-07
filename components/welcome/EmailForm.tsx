import styles from '../../styles/welcome/HeroSection.module.scss';
import { IEmailForm } from '../../types/types';

export const EmailForm = ({ setEmailInput, emailInput, handleSubmitBtn }: IEmailForm) => {
  return (
    <form action="" className={styles.heroForm}>
      <input
        type="email"
        className={styles.heroForm_input}
        placeholder="Email"
        value={emailInput}
        onChange={(e) => setEmailInput(e.target.value)}
      ></input>
      <button type="button" className={styles.heroForm_btn} onClick={handleSubmitBtn}>
        Sign up — it’s free!
      </button>
    </form>
  );
};
