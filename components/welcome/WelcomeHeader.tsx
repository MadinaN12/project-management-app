import { Button } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import TrelloImage from '../../images/Trello.svg';
import styles from '../../styles/welcome/WelcomeHeader.module.scss';
import { getToken } from '../../utils';

export const WelcomeHeader = () => {
  const [headerTransparent, setHeaderTransparent] = useState('');
  const router = useRouter();
  const token = getToken();

  useEffect(() => {
    if (typeof window !== 'undefined' && token !== null) router.push('/boards');

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
      <div className={styles.logBtns}>
        <Button
          className={styles.logBtn}
          variant="text"
          size="small"
          onClick={() => router.push('/login')}
        >
          Log in
        </Button>
        <Button variant="contained" size="small" onClick={() => router.push('/signup')}>
          Sign up
        </Button>
      </div>
    </header>
  );
};
