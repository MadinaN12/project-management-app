import '../styles/globals.css';
import * as React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../components/material-ui/theme';
import createEmotionCache from '../components/material-ui/createEmotionCache';
import type { AppProps } from 'next/app';
import { setUpStore } from '../store/store';
import { Provider } from 'react-redux';
import Footer from '../components/footer';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const store = setUpStore();

export default function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: MyAppProp) {
  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <CacheProvider value={emotionCache}>
          <Head>
            <meta name="viewport" content="initial-scale=1, width=device-width" />
          </Head>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
            <Footer />
          </ThemeProvider>
        </CacheProvider>
      </DndProvider>
    </Provider>
  );
}

interface MyAppProp extends AppProps {
  // Component: React.ReactNode | JSX.Element | React.ElementType | React.Component,
  emotionCache: EmotionCache;
  // pageProps: PropTypes.object.isRequired | object,
}
