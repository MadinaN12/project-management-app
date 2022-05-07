import type { NextPage } from 'next';
import { WelcomeHeader } from '../components/welcome/WelcomeHeader';
import { HeroSection } from '../components/welcome/HeroSection';
import { ProductsSection } from '../components/welcome/ProductsSection';

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
