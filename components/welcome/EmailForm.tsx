import { TextField, Button } from '@mui/material';
import { IEmailForm } from '../../types/registrationTypes';
import styles from '../../styles/welcome/HeroSection.module.scss';
import { en } from '../../public/locales/en/common';
import { ru } from '../../public/locales/ru/common';
import { useRouter } from 'next/router';

export const EmailForm = ({ setEmailInput, emailInput, handleSubmitBtn }: IEmailForm) => {
  const router = useRouter();
  const t = router.locale === 'en' ? en : ru;

  return (
    <form action="" className={styles.heroForm}>
      <TextField
        id="outlined-search"
        label={t.welcome.email}
        type="search"
        value={emailInput}
        onChange={(e) => setEmailInput(e.target.value)}
      />
      <Button variant="contained" size="large" onClick={handleSubmitBtn}>
        {t.welcome.freeBtn}
      </Button>
    </form>
  );
};
