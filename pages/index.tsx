import type { NextPage } from 'next';
import Image from 'next/image';
import TrelloImage from '../images/Trello.svg';
import HeroImage from '../images/hero.png';
import BoardImage from '../images/board.png';
import styles from '../styles/Welcome.module.scss';
import { DOMAttributes, MouseEventHandler, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Welcome: NextPage = () => {
  const [header, setHeader] = useState('');
  const [inputData, setInputData] = useState('');
  const router = useRouter();
  useEffect(() => {
    const onScroll = () => {
      if (window.pageYOffset > 70) {
        setHeader('white');
      } else {
        setHeader('');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  function handleSubmitBtn(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    router.push({
      pathname: '/signup',
      query: { email: inputData },
    });
  }
  return (
    <>
      <header className={`${styles.welcomeHeader} ${styles[header]}`}>
        <Image src={TrelloImage} width={126} height={36}></Image>
        <div className={styles.logBtns}>
          <button className={styles.btns} onClick={() => router.push('/login')}>
            Log in
          </button>
          <button className={styles.btns} onClick={() => router.push('/signup')}>
            Sign up
          </button>
        </div>
      </header>
      <section id={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroLeftPart}>
            <h1 className={styles.heroTitle}>Trello helps teams move work forward.</h1>
            <p className={styles.heroParagraph}>
              Collaborate, manage projects, and reach new productivity peaks. From high rises to the
              home office, the way your team works is unique—accomplish it all with Trello.
            </p>
            <form action="" className={styles.heroForm}>
              <input
                type="email"
                className={styles.heroForm_input}
                placeholder="Email"
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
              ></input>
              <button type="button" className={styles.heroForm_btn} onClick={handleSubmitBtn}>
                Sign up — it’s free!
              </button>
            </form>
          </div>
          <div className={styles.heroRightPart}>
            <Image src={HeroImage}></Image>
          </div>
        </div>
      </section>
      <section id={styles.products}>
        <div className={styles.container}>
          <div className={styles.products__topPart}>
            <h2 className={styles.topPart_title}>
              It’s more than work. It’s a way of working together.
            </h2>
            <p className={styles.topPart_paragraph}>
              Start with a Trello board, lists, and cards. Customize and expand with more features
              as your teamwork grows. Manage projects, organize tasks, and build team spirit—all in
              one place.
            </p>
            <button className={styles.topPart_btn} onClick={() => router.push('/signup')}>
              Start doing →
            </button>
            <Image src={BoardImage}></Image>
          </div>
        </div>
      </section>
    </>
  );
};

export default Welcome;
