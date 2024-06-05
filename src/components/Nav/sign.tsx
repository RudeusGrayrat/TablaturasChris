import BotonLink from "../ui/boton/botonLink";

export default function Sign() {
    return (
        <div className="">
            <BotonLink
                nombre="Login"
                estilos="mx-5"
                ruta="/perfil/login">
            </BotonLink>
            <span>|</span>
            <BotonLink
                nombre="Register"
                estilos="mx-5"
                ruta="/perfil/register">
            </BotonLink>
        </div>
    )
}