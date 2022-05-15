import { Button } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import router from 'next/router';
import { useState, useEffect } from 'react';
import TrelloImage from '../../images/Trello.svg';
import styles from '../../styles/welcome/WelcomeHeader.module.scss';
import CreateBtn from './CreateBtnHeader';

export const WelcomeHeader = () => {
  const [headerTransparent, setHeaderTransparent] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    const onScroll = () => {
      if (window.pageYOffset > 70) setHeaderTransparent('white');
      else setHeaderTransparent('');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    const tempToken = localStorage.getItem('token');
    if (tempToken) setToken(tempToken as string);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('token');
    router.push('/');
  };

  return (
    <header className={`${styles.welcomeHeader} ${styles[headerTransparent]}`}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Image src={TrelloImage} width={126} height={36} alt="trello"></Image>
        <CreateBtn />
      </Box>
      <div className={styles.logBtns}>
        {!token ? (
          <>
            <Button variant="text" size="small" onClick={() => router.push('/login')}>
              Log in
            </Button>
            <Button variant="contained" size="small" onClick={() => router.push('/signup')}>
              Sign up
            </Button>
          </>
        ) : (
          <>
            <Button variant="text" size="small" onClick={() => router.push('/')}>
              Edit Profile
            </Button>
            <Button variant="contained" size="small" onClick={handleSignOut}>
              Sign out
            </Button>
          </>
        )}
      </div>
    </header>
  );
};

('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzNTc5ZWIwMC01ODk1LTQ0YWUtOWQ4NC1iYjMxYjgwZjQzYmQiLCJsb2dpbiI6Im5hbWUiLCJpYXQiOjE2NTE4ODY4MjF9.uh1bOO9rPHP7N03ok0DRPMUO1EVwtil5ALbi9VTQmgI');
