import {
  Alert,
  AlertTitle,
  Button,
  Collapse,
  Link,
  Slide,
  TextField,
  Typography,
} from '@mui/material';
import { useRef, useState } from 'react';
import { LoginUser, PostUser } from '../../api/user';
import { ErrorTypeKind } from '../../types/utilsTypes';
import { FormError } from '../../utils/error';
import { emailValidator, nameValidator, passwordValidator } from '../../utils/validator';
import styles from '../../styles/form/Form.module.scss';

const RegistrationForm = () => {
  const nameInput = useRef() as React.MutableRefObject<HTMLInputElement>;
  const emailInput = useRef() as React.MutableRefObject<HTMLInputElement>;
  const passwordInput = useRef() as React.MutableRefObject<HTMLInputElement>;
  const rePasswordInput = useRef() as React.MutableRefObject<HTMLInputElement>;

  const [emptyNameError, setEmptyNameError] = useState(false);
  const [emptyEmailError, setEmptyEmailError] = useState(false);
  const [emptyPswError, setEmptyPswError] = useState(false);
  const [emptyRePswError, setEmptyRePswError] = useState(false);

  const [errorNotification, setErrorNotification] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  async function submitHandler(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    const nameCur = nameInput.current.value.trim();
    const emailCur = emailInput.current.value.trim();
    const passwordCur = passwordInput.current.value;
    const rePasswordCur = rePasswordInput.current.value;
    checkEmptyFields(nameCur, emailCur, passwordCur, rePasswordCur);

    try {
      const { isValid: nameValid, validMessage: nameMessage } = nameValidator(nameCur);
      const { isValid: emailValid, validMessage: emailMessage } = emailValidator(emailCur);
      const { isValid: passwordValid, validMessage: passwordMessage } = passwordValidator(
        passwordCur,
        rePasswordCur
      );

      if (!nameValid) throw new FormError(ErrorTypeKind.name, nameMessage);
      if (!emailValid) throw new FormError(ErrorTypeKind.email, emailMessage);
      if (!passwordValid) throw new FormError(ErrorTypeKind.password, passwordMessage);

      const signupResponse = await PostUser(nameCur, emailCur, passwordCur);
      if ('message' in signupResponse) throw new Error(signupResponse.message);

      const loginResponse = await LoginUser(emailCur, passwordCur);
      if ('message' in loginResponse) throw new Error(loginResponse.message);

      localStorage.setItem('token', loginResponse.token);
    } catch (error) {
      if (!(error instanceof Error)) return;
      setErrorMessage(error.message);
      setErrorNotification(true);
      setTimeout(() => setErrorNotification(false), 2000);
    }
  }

  function checkEmptyFields(name: string, email: string, password: string, rePassword: string) {
    if (name === '') setEmptyNameError(true);
    else setEmptyNameError(false);

    if (email === '') setEmptyEmailError(true);
    else setEmptyEmailError(false);

    if (password === '') setEmptyPswError(true);
    else setEmptyPswError(false);

    if (rePassword === '') setEmptyRePswError(true);
    else setEmptyRePswError(false);
  }

  return (
    <form action="" className={styles.formAuth}>
      <Typography variant="h5" gutterBottom component="h2">
        Sign up for your account
      </Typography>
      <TextField
        required
        error={emptyNameError}
        id="outlined-required"
        label="Name"
        defaultValue=""
        inputRef={nameInput}
        helperText={emptyNameError ? 'Please, enter your name' : ''}
        size="small"
        fullWidth
      />
      <TextField
        required
        error={emptyEmailError}
        id="outlined-required"
        label="Email"
        defaultValue=""
        inputRef={emailInput}
        helperText={emptyEmailError ? 'Please, enter your email' : ''}
        size="small"
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
        size="small"
        fullWidth
      />
      <TextField
        error={emptyRePswError}
        id="outlined-password-input"
        label="Re-password"
        type="password"
        autoComplete="current-password"
        helperText={emptyRePswError ? 'Please, re-enter your password' : ''}
        inputRef={rePasswordInput}
        size="small"
        fullWidth
      />
      <Button
        type="submit"
        variant="contained"
        size="small"
        fullWidth
        onClick={(e) => {
          submitHandler(e);
        }}
      >
        Sign up
      </Button>
      <hr className={styles.separateLine} />
      <ul className={styles.formLinks}>
        <li className={styles.formLinkText}>Already have an account ?</li>
        <li className={styles.formLinkText}>
          <Link href={'/login'}>Log in</Link>
        </li>
      </ul>
      <Collapse in={errorNotification}>
        <Slide in={errorNotification} direction="left">
          <Alert severity="error" style={{ position: 'fixed', top: 20, right: 20 }}>
            <AlertTitle>
              <strong>Error: </strong> {errorMessage}
            </AlertTitle>
          </Alert>
        </Slide>
      </Collapse>
    </form>
  );
};

export default RegistrationForm;
