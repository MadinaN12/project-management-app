import Link from 'next/link';
import { useRef, useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import styles from '../../styles/form/Form.module.scss';
import { LoginUser } from '../../api/user';
import { FormError } from '../../utils/error';

const LoginForm = () => {
  const emailInput = useRef() as React.MutableRefObject<HTMLInputElement>;
  const passwordInput = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [emptyPswError, setEmptyPswError] = useState(false);
  const [emptyEmailError, setEmptyEmailError] = useState(false);

  async function submitHandler(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    const emailCur = emailInput.current.value;
    const passwordCur = passwordInput.current.value;
    checkEmptyFields(emailCur, passwordCur);
    try {
      const response = await LoginUser(emailCur, passwordCur);
      console.log(response);
      if ('message' in response) {
        throw new Error(response.message);
      }
      localStorage.setItem('token', response.token);
    } catch (error) {}
  }

  function checkEmptyFields(email: string, password: string) {
    if (email === '') {
      setEmptyEmailError(true);
    } else {
      setEmptyEmailError(false);
    }

    if (password === '') {
      setEmptyPswError(true);
    } else {
      setEmptyPswError(false);
    }
  }

  return (
    <form action="" className={styles.formAuth}>
      <Typography variant="h5" gutterBottom component="h2">
        Log in to Trello
      </Typography>
      <TextField
        required
        error={emptyEmailError}
        id="outlined-required"
        label="Email"
        defaultValue=""
        inputRef={emailInput}
        helperText={emptyEmailError ? 'Please, enter your email' : ''}
        fullWidth
      />
      <TextField
        error={emptyPswError}
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        helperText={emptyPswError ? 'Please, enter your password' : ''}
        inputRef={passwordInput}
        fullWidth
      />
      <Button
        type="submit"
        variant="contained"
        color="success"
        size="large"
        fullWidth
        onClick={(e) => {
          submitHandler(e);
        }}
      >
        Log in
      </Button>
      <hr className={styles.separateLine} />
      <ul className={styles.formLinks}>
        <li className={styles.formLinkText}>Don't have an account ?</li>
        <li className={styles.formLinkText}>
          <Link href={'/signup'}>Sign up</Link>
        </li>
      </ul>
    </form>
  );
};

export default LoginForm;
