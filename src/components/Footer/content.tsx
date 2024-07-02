import BotonLink from "../ui/boton/botonLink";


export default function content(props: any) {
    return (
        <div className="flex flex-col text-left mx-16">
            <span className={`${props.estilos}  p-3`}>{props.title}</span>
            <BotonLink
                ruta="/home"
                estilos="p-3"
                nombre={props.primero}>
            </BotonLink>
            <BotonLink
                ruta="/home"
                estilos="p-3"
                nombre={props.segundo}>
            </BotonLink>
            <BotonLink
                ruta="/home"
                estilos="p-3"
                nombre={props.tercero}>
            </BotonLink>

        </div>
    )
}