import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';
import TableImage from '../images/table.svg';
import PlugImage from '../images/plug.png';
import Table2Image from '../images/table2.svg';
import LoginForm from '../components/forms/LoginForm';
import styles from '../styles/form/Registration.module.scss';
import Logo from '../components/Logo';

const Login: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <header className={styles.loginHeader}>
        <Logo width={183} height={40} onClick={() => router.push('/')}></Logo>
      </header>
      <section>
        <LoginForm />
      </section>
      <div className={styles.bottomImages}>
        <Image src={Table2Image} width={480} height={300} alt="Trello people image"></Image>
        <Image src={PlugImage} width={480} height={300} alt="Trello people image"></Image>
        <Image src={TableImage} width={480} height={300} alt="Trello people image"></Image>
      </div>
    </>
  );
};

export default Login;
