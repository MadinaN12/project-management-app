import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import styles from '../styles/Form.module.scss';
import { emailValidator, nameValidator, passwordValidator } from '../utils/validator';

interface IForm {
  isFull: boolean;
  email: string;
}
enum RouteEnum {
  LOGIN = 'login',
  SIGNUP = 'signup',
}
const Form: React.FC<IForm> = ({ isFull, email }) => {
  const nameInput = useRef() as React.MutableRefObject<HTMLInputElement>;
  const emailInput = useRef() as React.MutableRefObject<HTMLInputElement>;
  const password = useRef() as React.MutableRefObject<HTMLInputElement>;
  const rePassword = useRef() as React.MutableRefObject<HTMLInputElement>;
  const router = useRouter();

  async function submitHandler(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    const type = router.pathname.split('/')[1];
    const emailCur = emailInput.current.value;
    const nameCur = nameInput.current.value;
    const passwordCur = password.current.value;
    const rePasswordCur = rePassword.current.value;
    try {
      switch (type) {
        case RouteEnum.LOGIN:
          console.log(1);
          break;
        case RouteEnum.SIGNUP:
          const { isValid: emailValid, validMessage: emailMessage } = emailValidator(emailCur);
          const { isValid: nameValid, validMessage: nameMessage } = nameValidator(nameCur);
          const { isValid: passwordValid, validMessage: passwordMessage } = passwordValidator(
            passwordCur,
            rePasswordCur
          );
          if (!passwordValid) throw new Error(passwordMessage);
      }
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message);
      }
    }
  }
  return (
    <form action="" className={styles.formAuth}>
      <h2 className={styles.title}>{isFull ? 'Sign up to Trello' : 'Log in to Trello'}</h2>
      <input
        type="email"
        ref={emailInput}
        placeholder="Enter email"
        className={styles.input}
        defaultValue={email}
      />
      {isFull ? (
        <input type="text" ref={nameInput} placeholder="Enter name" className={styles.input} />
      ) : (
        <></>
      )}
      <input type="password" ref={password} placeholder="Enter password" className={styles.input} />
      {isFull ? (
        <input
          type="password"
          ref={rePassword}
          placeholder="Re-enter password"
          className={styles.input}
        />
      ) : (
        <></>
      )}
      <button
        type="submit"
        className={isFull ? `${styles.submitBtn} ${styles.signup}` : `${styles.submitBtn}`}
        onClick={(e) => {
          submitHandler(e);
        }}
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
