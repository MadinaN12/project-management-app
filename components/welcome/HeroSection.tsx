import Image from 'next/image';
import router from 'next/router';
import { useState } from 'react';
import HeroImage from '../../images/hero.png';
import { EmailForm } from './EmailForm';
import styles from '../../styles/welcome/HeroSection.module.scss';

export const HeroSection = () => {
  const [emailInput, setEmailInput] = useState('');

  function handleSubmitBtn(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    router.push({
      pathname: '/signup',
      query: { email: emailInput },
    });
  }

  return (
    <section id={styles.hero} className="welcome_section">
      <div className={styles.container}>
        <div className={styles.heroLeftPart}>
          <h1 className={styles.heroTitle}>Trello helps teams move work forward.</h1>
          <p className={styles.heroParagraph}>
            Collaborate, manage projects, and reach new productivity peaks. From high rises to the
            home office, the way your team works is unique—accomplish it all with Trello.
          </p>
          <EmailForm
            setEmailInput={setEmailInput}
            emailInput={emailInput}
            handleSubmitBtn={handleSubmitBtn}
          />
        </div>
        <div className={styles.heroRightPart}>
          <Image src={HeroImage} alt="hero"></Image>
        </div>
      </div>
    </section>
  );
};
