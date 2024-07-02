import Content from "./content";

export default function Footer() {
    return (
        <div className="flex justify-between  bg-slate-400 p-16 ">
            <Content
                title="CONTEMPORÁNEO"
                estilos="text-2xl">
            </Content>
            <Content
                title="Empresa"
                estilos="text-xl"
                primero="Contáctanos"
                segundo="Sobre Nosotros"
                tercero="Clases">
            </Content>
            <Content
                title="Participa"
                estilos="text-xl"

                primero="solicita"
                segundo="Envia tus cifrados"
                tercero="Sugerencias">
            </Content>
            <Content
                title="Ayuda"
                estilos="text-xl"

                primero="Preguntas frecuentes">
            </Content>

        </div>
    )
}