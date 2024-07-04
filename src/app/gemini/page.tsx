"use client"

import BotonLink from '../../components/ui/boton/botonLink';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function Inicio() {
  const [text, setText] = useState("")

  const [result, setResult] = useState('');
  const obtener = async () => {
    const response = await axios.post("https://tablaturasapi-production.up.railway.app/gemini", { gemini: text })
    setResult(response.data);

  }
  const enviar = () => {
    obtener()
    setText("")
  }

  const prueba = (nombre: string) => {
    setText(`Ayudame a crear una canción de ${nombre}`)
  }
  const handleKeyPress = (event : any) => {
    if (event.key === 'Enter') {
      enviar();
    }
  }

  return (
    <div className='flex items-center flex-col'>
      <div className='flex flex-col mt-20 items-center '>
        <h2 className=' text-5xl '>Bienvenido creador</h2>
        <span className='flex flex-col text-center	m-12'>
          en este lugar podrás crear tus
          <br />
          partituras con ayuda de la ia Gemini
        </span>
      </div>
      {result ? (
        <div className="mx-[20%]" dangerouslySetInnerHTML={{ __html: result }}></div>
      ) : (
        <div>
          <BotonLink
            nombre="Reguetón"
            onClick={() => prueba('Reguetón')}
            estilos="m-5 p-5 rounded-xl hover:bg-slate-500  bg-slate-100"
            ruta="#">
          </BotonLink>
          <BotonLink
            nombre="Salsa"
            onClick={() => prueba('Salsa')}
            estilos="m-5 p-5 rounded-xl hover:bg-slate-500 bg-slate-100"
            ruta="#">
          </BotonLink>
          <BotonLink
            nombre="Balada"
            estilos="m-5 p-5 rounded-xl hover:bg-slate-500  bg-slate-100"
            onClick={() => prueba('Balada')}
            ruta="#">
          </BotonLink>
        </div>)
      }
      <div className='flex w-3/4 m-16 justify-center items-center'>
        <input
          className='h-12 p-4 ml-28 w-3/4 bg-slate-200 rounded-2xl'
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyPress}/>
        <BotonLink
          nombre="Enviar"
          estilos="p-5 mx-3 rounded-xl hover:bg-slate-500  bg-slate-100"
          ruta="#"
          onClick={enviar}>
        </BotonLink>
      </div>
    </div>
  )
}