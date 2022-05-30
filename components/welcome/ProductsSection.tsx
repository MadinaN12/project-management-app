import { Button } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import BoardImage from '../../images/welcome-board.png';
import styles from '../../styles/welcome/ProductsSection.module.scss';
import { en } from '../../public/locales/en/common';
import { ru } from '../../public/locales/ru/common';

export const ProductsSection = () => {
  const router = useRouter();
  const t = router.locale === 'en' ? en : ru;

  return (
    <section id={styles.products}>
      <div className={styles.container}>
        <div className={styles.products__topPart}>
          <h2 className={styles.topPart_title}>{t.welcome.productTitle}</h2>
          <p className={styles.topPart_paragraph}>{t.welcome.productPh}</p>
          <Button variant="outlined" size="large" onClick={() => router.push('/signup')}>
            {t.welcome.startBtn}
          </Button>
          <Image src={BoardImage} alt="board"></Image>
        </div>
      </div>
    </section>
  );
};
