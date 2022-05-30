import { Button } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import TrelloImage from '../../images/Trello.svg';
import styles from '../../styles/welcome/WelcomeHeader.module.scss';
import LocalSwitcher from '../localSwitcher';
import { en } from '../../public/locales/en/common';
import { ru } from '../../public/locales/ru/common';

export const WelcomeHeader = () => {
  const [headerTransparent, setHeaderTransparent] = useState('');
  const router = useRouter();
  const t = router.locale === 'en' ? en : ru;

  useEffect(() => {
    const onScroll = () => {
      if (window.pageYOffset > 70) {
        setHeaderTransparent('white');
      } else {
        setHeaderTransparent('');
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.welcomeHeader} ${styles[headerTransparent]}`}>
      <Image src={TrelloImage} width={126} height={36} alt="trello"></Image>
      <LocalSwitcher />
      <div className={styles.logBtns}>
        <Button
          className={styles.logBtn}
          variant="text"
          size="small"
          onClick={() => router.push('/login')}
        >
          {t.welcome.login}
        </Button>
        <Button variant="contained" size="small" onClick={() => router.push('/signup')}>
          {t.welcome.signUp}
        </Button>
      </div>
    </header>
  );
};
