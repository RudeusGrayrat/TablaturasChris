import Link from "next/link";

export default function BotonLink(props: any) {
    return (
        <Link href={props.ruta}>
            <button
                className={`${props.estilos}  py-2  hover:scale-110 hover:text-white duration-200`}
                {...props}
            >
                {props.nombre}
            </button>
        </Link>
    )
}