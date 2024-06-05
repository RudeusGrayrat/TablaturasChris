"use client"
import axios from "axios"
import { useEffect, useState } from "react"
import Cards from "@/components/Cards/Cards"

export default function LetraYAcorde() {
    const [response, setResponse] = useState([])
    const pdf = async () => {
        const response = await axios.get("https://drive.google.com/file/d/1Yqa_mbrOOYcrQUH40OlYHBQlMRA-Ac3d/view?usp=sharing")
        setResponse(response.data)
    }
    useEffect(() => {
        pdf()
    }, [])

    console.log(response);


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