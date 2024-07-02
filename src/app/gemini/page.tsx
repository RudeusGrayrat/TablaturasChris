import React from 'react';
import BotonLink from '../../components/ui/boton/botonLink';

export default function Inicio() {
    return (
        <div className='flex items-center flex-col'>
            <div className='flex flex-col mt-20 items-center '>
                <h2 className=' text-5xl '>Bienbenido creador</h2>
                <span className='flex flex-col text-center	m-12'>
                    en este lugar podrás crear tus
                    <br />
                    partituras con ayuda de la ia Gemini
                </span>
            </div>
            <div>
                <BotonLink
                    nombre="Reguetón"
                    estilos="m-5 p-5 rounded-xl hover:bg-slate-500  bg-slate-100"
                    ruta="#">
                </BotonLink>
                <BotonLink
                    nombre="Reguetón"
                    estilos="m-5 p-5 rounded-xl hover:bg-slate-500 bg-slate-100"
                    ruta="#">
                </BotonLink>
                <BotonLink
                    nombre="Reguetón"
                    estilos="m-5 p-5 rounded-xl hover:bg-slate-500  bg-slate-100"
                    ruta="#">
                </BotonLink>
            </div>
            <div className='flex w-3/4 m-16 justify-center'>
                <input
                    className='h-12 w-3/4 bg-slate-200 rounded-2xl'
                    type="text" />
            </div>
        </div>
    )
}