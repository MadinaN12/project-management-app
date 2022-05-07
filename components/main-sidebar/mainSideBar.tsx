import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import Assd from './asdas';
import { useRouter } from 'next/router';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import styles from './Styles.module.scss';

export default function MainSideBar() {
  const router = useRouter();
  useEffect(() => {}, []);

  return (
    <ThemeProvider theme={theme}>
      <aside color="secondary" className={styles.m_sidebar}>
        <Assd />
        <ul>
          <li>
            <a className={styles.color}>Доски</a>
          </li>
          <li>
            <a>Шаблоны</a>
          </li>
          <li>
            <a>Главная страница</a>
          </li>
        </ul>
      </aside>
    </ThemeProvider>
  );
}
