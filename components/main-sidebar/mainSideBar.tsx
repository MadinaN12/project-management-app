import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlipboard } from '@fortawesome/free-brands-svg-icons';
import { faWindowMaximize, faWaveSquare } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import Assd from './asdas';
import { useRouter } from 'next/router';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import styles from './Styles.module.scss';

export default function MainSideBar() {
  const [locationStatus, setLocationStatus] = useState('');
  const router = useRouter();

  useEffect(() => {
    setLocationStatus(router.pathname);
  }, [router]);

  return (
    <ThemeProvider theme={theme}>
      <aside color="secondary" className={styles.m_sidebar}>
        {/* <Assd /> */}
        <ul>
          <li className={`${locationStatus === '/boards' ? styles.active : ''}`}>
            <FontAwesomeIcon icon={faFlipboard} />
            <a className={styles.color}>Доски</a>
          </li>
          <li className={`${locationStatus === '/templates' ? styles.active : ''}`}>
            <FontAwesomeIcon icon={faWindowMaximize} />
            <a>Шаблоны</a>
          </li>
          <li className={`${locationStatus === '/' ? styles.active : ''}`}>
            <FontAwesomeIcon icon={faWaveSquare} />
            <a>Главная страница</a>
          </li>
        </ul>
      </aside>
    </ThemeProvider>
  );
}
