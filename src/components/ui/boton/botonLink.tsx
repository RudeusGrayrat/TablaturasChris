import Link from "next/link";

export default function BotonLink(props: any) {
    const luna: string = "hola";
    return (
        <Link href={props.ruta}>
            <button
                className={`${props.estilos} hover:text-white cl py-2`}
                {...props}
            >
                {props.nombre}
            </button>
        </Link>
    )
}