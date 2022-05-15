import { Button } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import router, { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TrelloImage from '../../images/Trello.svg';
import styles from '../../styles/welcome/WelcomeHeader.module.scss';
import CreateBtn from './CreateBtnHeader';
import { StoreMainPage } from '../../types/types';
import { refreshBoard } from '../../stores/boards/slices';
import Link from 'next/link';

export const WelcomeHeader = () => {
  const [headerTransparent, setHeaderTransparent] = useState('');
  const [token, setToken] = useState('');
  const rout = useRouter();
  const refreshHeader = useSelector((state) => (state as StoreMainPage).refreshBoard);
  const dispatch = useDispatch();

  useEffect(() => {
    const onScroll = () => {
      if (window.pageYOffset > 70) setHeaderTransparent('white');
      else setHeaderTransparent('');
      if (rout.pathname.length > 1) setHeaderTransparent('white');
    };

    const tempToken = localStorage.getItem('token');
    if (tempToken) setToken(tempToken as string);
    else setToken('');
    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [rout.pathname.length, refreshHeader]);

  const handleSignOut = () => {
    localStorage.removeItem('token');
    router.push('/');
    dispatch(refreshBoard('a'));
    dispatch(refreshBoard('a'));
  };

  return (
    <header className={`${styles.welcomeHeader} ${styles[headerTransparent]}`}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Image src={TrelloImage} width={126} height={36} alt="trello"></Image>
        {token ? <CreateBtn /> : ''}
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
