import React from 'react';

export default function Home() {
//bg-[url('/imagenPartitura.jpeg')]
  return (
    <div className="flex items-center justify-center p-24 h-[100%]
      bg-slate-100  bg-cover ">
      <div className='m-8 text-center p-2 px-6 rounded-lg'>
        <h1 className=' text-5xl'>CONTEMPORANEO</h1>
        <span>Quienes somos?
          <br />¿Cansado de partituras incorrectas o poco precisas? Yo también. Por eso 
          <br /> en Contemporáneo podrás encontrar arreglos, transcripciones y cifrados
          <br /> hecho por músicos profesionales.
        </span>
      </div>
      <div className='text-center mx-16' >
        <button className='m-2 bg-slate-500  p-2 rounded-lg'>Conocer</button>
        <button className='m-2 bg-slate-500  p-2 rounded-lg'>Contactar</button>
      </div>
    </div >
  );
};