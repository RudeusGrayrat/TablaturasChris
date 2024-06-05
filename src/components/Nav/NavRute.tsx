"use client"
import { usePathname } from "next/navigation";
import BotonLink from "../ui/boton/botonLink";
import NavButtonD from "./NavButtonD";

export default function NavRute() {
    const currentPath = usePathname()

    return (
        <div className="flex ">
            <BotonLink
                nombre="Home"
                estilos={`${currentPath === "/home" ? 'bg-black rounded-lg  text-white mx-4 p-4  ' : 'mx-8'} `}
                ruta="/home">
            </BotonLink>
            <NavButtonD
                estilos={`${currentPath === "/home/partituras" ? 'bg-black rounded-lg  text-white mx-4 p-4 ' : 'mx-8'} `}
            >
            </NavButtonD>
            <BotonLink
                nombre="Letras y Acordes"
                estilos={`${currentPath === '/home/letra-acorde' ? 'bg-black rounded-lg  text-white mx-4 p-4 ' : 'mx-8'} `}
                ruta="/home/letra-acorde">
            </BotonLink>
        </div>
    )
}