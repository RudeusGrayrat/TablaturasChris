"use client"
import Cards from "@/components/Cards/Cards"

export default function LetraYAcorde() {
    

    return (
        <div className="flex flex-wrap my-20 mx-36 justify-center items-center ">
            <Cards
                imageUrl={"/imagenPartitura.jpeg"}
                title="hola"
                description="Hola">
            </Cards>
           
        </div>
    )
}