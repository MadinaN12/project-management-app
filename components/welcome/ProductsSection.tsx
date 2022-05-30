import { Button } from '@mui/material';
import Image from 'next/image';
import router from 'next/router';
import BoardImage from '../../images/welcome-board.png';
import styles from '../../styles/welcome/ProductsSection.module.scss';

export const ProductsSection = () => {
  return (
    <section id={styles.products}>
      <div className={styles.container}>
        <div className={styles.products__topPart}>
          <h2 className={styles.topPart_title}>
            It’s more than work. It’s a way of working together.
          </h2>
          <p className={styles.topPart_paragraph}>
            Start with a Trello board, lists, and cards. Customize and expand with more features as
            your teamwork grows. Manage projects, organize tasks, and build team spirit—all in one
            place.
          </p>
          <Button variant="outlined" size="large" onClick={() => router.push('/signup')}>
            Start doing →
          </Button>
          <Image className={styles.prodName} src={BoardImage} alt="board"></Image>
        </div>
      </div>
    </section>
  );
};
