import { Box } from '@mui/system';
import router from 'next/router';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/header/Header.module.scss';
import CreateBtn from './CreateBtnHeader';
import { StoreMainPage } from '../../types/types';
import { refreshBoard } from '../../stores/boards/slices';
import Logo from '../Logo';
import HeaderBtns from './HeaderBtns';

export const Header = () => {
  const [headerTransparent, setHeaderTransparent] = useState('');
  const refreshHeader = useSelector((state) => (state as StoreMainPage).refreshBoard);
  const dispatch = useDispatch();

  useEffect(() => {
    const onScroll = () => {
      if (window.pageYOffset > 70) setHeaderTransparent('white');
      else setHeaderTransparent('blue');
    };
    onScroll();

    const tempToken = localStorage.getItem('token');
    if (!tempToken) router.push('/');

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [refreshHeader]);

  const handleSignOut = () => {
    localStorage.removeItem('token');
    router.push('/');
    dispatch(refreshBoard('a'));
    dispatch(refreshBoard('a'));
  };

  return (
    <header className={`${styles.welcomeHeader} ${styles[headerTransparent]}`}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Logo width={126} height={36} onClick={() => {}} />
        <CreateBtn />
      </Box>
      <div className={styles.logBtns}>
        <HeaderBtns handleSignOut={handleSignOut} />
      </div>
    </header>
  );
};
