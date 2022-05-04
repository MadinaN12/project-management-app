import React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
};

export default MainContainer;
