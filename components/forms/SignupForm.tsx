import { Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { LoginUser, PostUser } from '../../api/user';
import { ErrorTypeKind } from '../../types/utilsTypes';
import { FormError } from '../../utils/error';
import {
  checkEmptyFields,
  emailValidator,
  nameValidator,
  passwordValidator,
} from '../../utils/validator';
import AdditionalMenu from './AdditionalMenu';
import PopupNotification from '../PopupNotification';
import { useRouter } from 'next/router';
import { ISignupInputs, IEmtyErrorsInputs } from '../../types/registrationTypes';
import styles from '../../styles/form/Form.module.scss';

const RegistrationForm = () => {
  const router = useRouter();

  const [inputs, setInputs] = useState<ISignupInputs>({
    nameInput: '',
    emailInput: '',
    passwordInput: '',
    rePasswordInput: '',
  });

  const [emptyErrors, setEmptyErrors] = useState<IEmtyErrorsInputs>({
    nameInput: false,
    emailInput: false,
    passwordInput: false,
    rePasswordInput: false,
  });

  const [errorNotification, setErrorNotification] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  async function submitHandler(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    const [objInputs, isEmptyField] = checkEmptyFields(inputs);
    if (isEmptyField) return setEmptyErrors(objInputs);

    try {
      const { isValid: nameValid, validMessage: nameMessage } = nameValidator(inputs.nameInput);
      const { isValid: emailValid, validMessage: emailMessage } = emailValidator(inputs.emailInput);
      const { isValid: passwordValid, validMessage: passwordMessage } = passwordValidator(
        inputs.passwordInput,
        inputs.rePasswordInput
      );

      if (!nameValid) throw new FormError(ErrorTypeKind.name, nameMessage);
      if (!emailValid) throw new FormError(ErrorTypeKind.email, emailMessage);
      if (!passwordValid) throw new FormError(ErrorTypeKind.password, passwordMessage);

      const signupResponse = await PostUser(
        inputs.nameInput,
        inputs.emailInput,
        inputs.passwordInput
      );
      if ('message' in signupResponse) throw new Error(signupResponse.message);

      const loginResponse = await LoginUser(inputs.emailInput, inputs.passwordInput);
      if ('message' in loginResponse) throw new Error(loginResponse.message);

      localStorage.setItem('token', loginResponse.token);
      localStorage.setItem('userID', signupResponse.id);
      localStorage.setItem('userName', signupResponse.name);
      router.push('/boards');
    } catch (error) {
      if (!(error instanceof Error)) return;
      setErrorMessage(error.message);
      setErrorNotification(true);
      setTimeout(() => setErrorNotification(false), 2000);
    }
  }

  return (
    <form action="" className={styles.formAuth}>
      <Typography variant="h5" gutterBottom component="h2">
        Sign up for your account
      </Typography>
      <TextField
        required
        error={emptyErrors.nameInput}
        id="outlined-required"
        label="Name"
        defaultValue=""
        onChange={(e) => setInputs({ ...inputs, nameInput: e.target.value.trim() })}
        value={inputs.nameInput}
        helperText={emptyErrors.nameInput ? 'Please, enter your name' : ''}
        size="small"
        fullWidth
      />
      <TextField
        required
        error={emptyErrors.emailInput}
        id="outlined-required"
        label="Email"
        defaultValue=""
        value={inputs.emailInput}
        onChange={(e) => setInputs({ ...inputs, emailInput: e.target.value.trim() })}
        helperText={emptyErrors.emailInput ? 'Please, enter your email' : ''}
        size="small"
        fullWidth
      />
      <TextField
        error={emptyErrors.passwordInput}
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        value={inputs.passwordInput}
        onChange={(e) => setInputs({ ...inputs, passwordInput: e.target.value })}
        helperText={emptyErrors.passwordInput ? 'Please, enter your password' : ''}
        size="small"
        fullWidth
      />
      <TextField
        error={emptyErrors.rePasswordInput}
        id="outlined-password-input"
        label="Re-password"
        type="password"
        autoComplete="current-password"
        value={inputs.rePasswordInput}
        onChange={(e) => setInputs({ ...inputs, rePasswordInput: e.target.value })}
        helperText={emptyErrors.rePasswordInput ? 'Please, re-enter your password' : ''}
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
      <AdditionalMenu isLogin={false}>Already have an account ?</AdditionalMenu>
      <PopupNotification errorNotification={errorNotification} errorMessage={errorMessage} />
    </form>
  );
};

export default RegistrationForm;
