import React from 'react';
import Cards from '@/components/Cards/Cards';
export default function Home() {
  //bg-[url('/imagenPartitura.jpeg')]
  return (
    <div>
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

      </div >
      <div className=''>

        <div className=' text-center pt-16'>
          <h1 className='  text-6xl'>Te ofrezco </h1>
        </div>
        <div className='flex flex-wrap p-20 pt-12 justify-center'>
          <Cards
            imageUrl='/imagenPartitura.jpeg'
            title='Partituras'
            description='las partituras son.......'>
          </Cards>
          <Cards
            imageUrl='/imagenPartitura.jpeg'
            title='Partituras'
            description='las partituras son.......'>
          </Cards>
          <Cards
            imageUrl='/imagenPartitura.jpeg'
            title='Partituras'
            description='las partituras son.......'>
          </Cards>
          <Cards
            imageUrl='/imagenPartitura.jpeg'
            title='Partituras'
            description='las partituras son.......'>
          </Cards>
        </div>
      </div>
    </div>
  );
};