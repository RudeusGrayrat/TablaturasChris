import React from 'react';

export default function Home() {

  return (
    <div className="flex flex-col items-start justify-center p-24 h-[100%]
      bg-slate-100 bg-[url('/imagenPartitura.jpeg')] bg-cover ">
      <div className='m-8 text-center bg-slate-400 p-2 px-6 rounded-lg'>
        <h1 className=' text-5xl'>Bienbenido</h1>
        <span>Quienes somos?
          <br />somos blababallabalba
          <br /> labablabablabblablbalblabl
          <br /> labablabablabblablbalblabl
        </span>
      </div>
      <div className='text-center mx-16' >
        <button className='m-2 bg-slate-500  p-2 rounded-lg'>Conocer</button>
        <button className='m-2 bg-slate-500  p-2 rounded-lg'>Contactar</button>
      </div>
    </div >
  );
};