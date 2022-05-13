import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { setUpStore } from '../store/store';
import { Provider } from 'react-redux';
import { WelcomeHeader } from '../components/header/WelcomeHeader';

const store = setUpStore();

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <WelcomeHeader />
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
