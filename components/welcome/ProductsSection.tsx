import Image from 'next/image';
import router from 'next/router';
import BoardImage from '../../images/board.png';
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
          <button className={styles.topPart_btn} onClick={() => router.push('/signup')}>
            Start doing →
          </button>
          <Image src={BoardImage}></Image>
        </div>
      </div>
    </section>
  );
};
