import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { setUpStore } from '../store/store';
import { Provider } from 'react-redux';
import Header from '../components/header';

const store = setUpStore();

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
