import Footer from '@/components/Footer/Footer';
import Intro from '@/components/Main/introduccion';
import Main from '@/components/Main/main';
import React from 'react';
export default function Home() {
  return (
    <div>
      <Intro></Intro>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
};