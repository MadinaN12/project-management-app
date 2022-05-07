import { useEffect } from 'react';
import Assd from './asdas';
import { useRouter } from 'next/router';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';

export default function MainSideBar() {
  const router = useRouter();
  console.log(router);

  useEffect(() => {}, []);

  return (
    <ThemeProvider theme={theme}>
      <aside color="secondary" style={{ background: '#3245' }}>
        <Assd />
        <ul>
          <li>
            <a color="secondary">Доски</a>
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
