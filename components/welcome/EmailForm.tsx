import { TextField, Button } from '@mui/material';
import { IEmailForm } from '../../types/registrationTypes';
import styles from '../../styles/welcome/HeroSection.module.scss';

export const EmailForm = ({ setEmailInput, emailInput, handleSubmitBtn }: IEmailForm) => {
  return (
    <form action="" className={styles.heroForm}>
      <TextField
        id="outlined-search"
        label="Enter email"
        type="search"
        value={emailInput}
        onChange={(e) => setEmailInput(e.target.value)}
      />
      <Button variant="contained" size="large" onClick={handleSubmitBtn}>
        Sign up — it’s free!
      </Button>
    </form>
  );
};
