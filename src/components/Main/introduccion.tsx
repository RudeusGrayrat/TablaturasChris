
export default function Intro() {
    return (
        <div className="flex items-center justify-center p-24 h-[100%]   bg-cover "
            style={{ backgroundImage: "url('/tocando_piano.jpeg')" }}  >
            <div className=' text-white m-8 text-center p-2 px-6 rounded-lg'>
                <h1 className=' mb-4 text-5xl font-medium'>CONTEMPORANEO</h1>
                <span >Quienes somos?
                    <br />¿Cansado de partituras incorrectas o poco precisas? Yo también. Por eso
                    <br /> en Contemporáneo podrás encontrar arreglos, transcripciones y cifrados
                    <br /> hecho por músicos profesionales.
                </span>
            </div>
        </div >
    )
}
