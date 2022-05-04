import type { NextPage } from 'next';
import Image from 'next/image';
import TrelloImage from '../images/Trello.svg';
import HeroImage from '../images/hero.png';
import styles from '../styles/Welcome.module.scss';

const Welcome: NextPage = () => {
  return (
    <>
      <header className={styles.welcomeHeader}>
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
          </div>
          <div className={styles.heroRightPart}>
            <Image src={HeroImage}></Image>
          </div>
        </div>
      </section>
      <section></section>
    </>
  );
};

export default Welcome;
