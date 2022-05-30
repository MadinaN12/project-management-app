import type { NextPage } from 'next';
import { HeroSection } from '../components/welcome/HeroSection';
import { ProductsSection } from '../components/welcome/ProductsSection';
import { WelcomeHeader } from '../components/welcome/WelcomeHeader';

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
