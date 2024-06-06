"use client"
import { usePathname } from "next/navigation";
import BotonLink from "../ui/boton/botonLink";
import NavButtonD from "./NavButtonD";

export default function NavRute() {
    const currentPath = usePathname()

    return (
        <div className="flex ">
            <NavButtonD
                estilos={`${currentPath === "/partituras" ? 'bg-black rounded-lg  text-white mx-4 p-4 ' : 'mx-8'} `}
            >
            </NavButtonD>
            <BotonLink
                nombre="Letras y Acordes"
                estilos={`${currentPath === '/letra-acorde' ? 'bg-black rounded-lg  text-white mx-4 p-4 ' : 'mx-8'} `}
                ruta="/home/letra-acorde">
            </BotonLink>
            <BotonLink
                nombre="Contacto"
                estilos={`${currentPath === "/contact" ? 'bg-black rounded-lg  text-white mx-4 p-4  ' : 'mx-8'} `}
                ruta="/contact">
            </BotonLink>
        </div>
    )
}