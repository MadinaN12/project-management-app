import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { WelcomeHeader } from '../components/welcome/WelcomeHeader';
import { HeroSection } from '../components/welcome/HeroSection';
import { ProductsSection } from '../components/welcome/ProductsSection';

const Welcome: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <WelcomeHeader />
      <HeroSection />
      <ProductsSection />
    </>
  );
};

export default Welcome;
