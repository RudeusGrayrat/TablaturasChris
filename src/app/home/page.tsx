import React from 'react';
import Cards from '../../components/Cards/Cards';
import Image from 'next/image';
export default function Inicio() {
    return (
        <div>
            
            <div className=' bg-slate-200 text-center pt-16'>
                <h1 className=' bg-slate-200 text-6xl'>Te ofrezco </h1>
            </div>
            <div className='flex flex-wrap bg-slate-200 p-20 pt-12 justify-center'>
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
    )
}