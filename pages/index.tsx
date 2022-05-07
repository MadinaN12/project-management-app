import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { WelcomeHeader } from '../components/welcome/WelcomeHeader';
import { HeroSection } from '../components/welcome/HeroSection';
import { ProductsSection } from '../components/welcome/ProductsSection';
import styles from '../styles/Welcome.module.scss';
const Welcome: NextPage = () => {
  return (
    <>
      <WelcomeHeader />
      <HeroSection />
      <ProductsSection />
    </>
  );
};

export default Welcome;
