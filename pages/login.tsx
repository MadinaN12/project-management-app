import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';
import TrelloImage from '../images/Trello.svg';
import TableImage from '../images/table.svg';
import PlugImage from '../images/plug.png';
import Table2Image from '../images/table2.svg';
import LoginForm from '../components/forms/LoginForm';
import styles from '../styles/form/Registration.module.scss';

const Login: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <header className={styles.loginHeader}>
        <Image
          src={TrelloImage}
          width={183}
          height={40}
          className={styles.trelloImage}
          onClick={() => router.push('/')}
        ></Image>
      </header>
      <section>
        <LoginForm />
      </section>
      <div className={styles.bottomImages}>
        <Image src={Table2Image} width={480} height={300}></Image>
        <Image src={PlugImage} width={480} height={300}></Image>
        <Image src={TableImage} width={480} height={300}></Image>
      </div>
    </>
  );
};

export default Login;
