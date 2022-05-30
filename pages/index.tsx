import type { NextPage } from 'next';
import { HeroSection } from '../components/welcome/HeroSection';
import { ProductsSection } from '../components/welcome/ProductsSection';
import { TeamSection } from '../components/welcome/TeamSection';
import { WelcomeHeader } from '../components/welcome/WelcomeHeader';

const Welcome: NextPage = () => {
  return (
    <>
      <WelcomeHeader />
      <HeroSection />
      <TeamSection />
      <ProductsSection />
    </>
  );
};

export default Welcome;
