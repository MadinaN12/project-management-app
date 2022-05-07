import Image from 'next/image';
import router from 'next/router';
import { useState, useEffect } from 'react';
import TrelloImage from '../../images/Trello.svg';
import styles from '../../styles/welcome/WelcomeHeader.module.scss';

export const WelcomeHeader = () => {
  const [headerTransparent, setHeaderTransparent] = useState('');
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
      <Image src={TrelloImage} width={126} height={36}></Image>
      <div className={styles.logBtns}>
        <button className={styles.btns} onClick={() => router.push('/login')}>
          Log in
        </button>
        <button className={styles.btns} onClick={() => router.push('/signup')}>
          Sign up
        </button>
      </div>
    </header>
  );
};
