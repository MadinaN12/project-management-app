import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import HeroImage from '../../images/hero.png';
import { EmailForm } from './EmailForm';
import styles from '../../styles/welcome/HeroSection.module.scss';
import { en } from '../../public/locales/en/common';
import { ru } from '../../public/locales/ru/common';

export const HeroSection = () => {
  const [emailInput, setEmailInput] = useState('');
  const router = useRouter();
  const t = router.locale === 'en' ? en : ru;

  function handleSubmitBtn(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    router.push({
      pathname: '/signup',
      query: { email: emailInput },
    });
  }

  return (
    <section id={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroLeftPart}>
          <h1 className={styles.heroTitle}>{t.welcome.title}</h1>
          <p className={styles.heroParagraph}>{t.welcome.heroParagraph}</p>
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
