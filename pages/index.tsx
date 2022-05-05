import type { NextPage } from 'next';
import Image from 'next/image';
import TrelloImage from '../images/Trello.svg';
import HeroImage from '../images/hero.png';
import BoardImage from '../images/board.png';
import styles from '../styles/Welcome.module.scss';
import { DOMAttributes, UIEventHandler, useEffect, useRef, useState } from 'react';

const Welcome: NextPage = () => {
  const [header, setHeader] = useState('');
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

  return (
    <>
      <header className={`${styles.welcomeHeader} ${styles[header]}`}>
        <Image src={TrelloImage} width={126} height={36}></Image>
        <div className={styles.logBtns}>
          <button className={styles.btns}>Log in</button>
          <button className={styles.btns}>Sign up</button>
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
              <input type="email" className={styles.heroForm_input} placeholder="Email"></input>
              <button type="submit" className={styles.heroForm_btn}>
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
            <a href="" className={styles.topPart_btn}>
              Start doing →
            </a>
            <Image src={BoardImage}></Image>
          </div>
        </div>
      </section>
    </>
  );
};

export default Welcome;
