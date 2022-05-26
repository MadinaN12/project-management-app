import type { NextPage } from 'next';
import { HeroSection } from '../components/welcome/HeroSection';
import { ProductsSection } from '../components/welcome/ProductsSection';

const Welcome: NextPage = () => {
  return (
    <>
      <HeroSection />
      <ProductsSection />
    </>
  );
};

export default Welcome;
