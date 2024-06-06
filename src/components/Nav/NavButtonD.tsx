"use client"
import { useState } from "react";
import BotonLink from "../ui/boton/botonLink";

export default function NavButtonD(props :any) {
    const [despliegue, setDespliegue] = useState(false);
    const desplegar = () => {
        setDespliegue(true)
    }
    const ocultar = () => {
        setDespliegue(false)
    }
    const colorbackg = despliegue ? "bg-transparent" : ""

    
    return (
        <div className=" hover:bg-slate-400 rounded-t-lg w-44 text-center"
            onMouseEnter={desplegar}
            onMouseLeave={ocultar}>
            <BotonLink
                nombre="Partituras"
                estilos={`${props.estilos} ${colorbackg}`}
                ruta="/partituras"
            >
            </BotonLink>
            {despliegue &&
                <div className="absolute bg-slate-400 flex flex-col items-center w-44 pt-2 rounded-b-lg">
                    <BotonLink
                        nombre="Cifrado solo"
                        estilos="my-2"
                        ruta="/partituras/cifrado-solo">
                    </BotonLink>
                    <BotonLink
                        nombre="Lead con cifrado"
                        estilos="my-2"
                        ruta="/partituras/lead-cifrado">
                    </BotonLink>
                    <BotonLink
                        nombre="Arreglos"
                        estilos="my-2"
                        ruta="/partituras/arreglos">
                    </BotonLink>
                    <BotonLink
                        nombre="Transcripciones"
                        estilos="my-2"
                        ruta="/partituras/transcripciones">
                    </BotonLink>
                </div>}
        </div>
    )
}