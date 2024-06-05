import React from 'react';
import Image from 'next/image';

export default function Home() {

  return (
    <div className="flex  items-center justify-center p-24 h-[100%]  bg-slate-100">
      <Image alt='Logo' width={400} height={200} src="/imagenPartitura.jpeg"></Image>
      <div className='m-8 text-center'>
        <h1 className=' text-5xl'>Bienbenido</h1>
        <span>Quienes somos?
          <br />somos blababallabalba
          <br /> labablabablabblablbalblabl
          <br /> labablabablabblablbalblabl
          <br /> labablabablabblablbalblabl
          <br /> labablabablabblablbalblabl</span>
      </div>
    </div >
  );
};