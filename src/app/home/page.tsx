import React from 'react';
import Cards from '../../components/Cards/Cards';
import Link from 'next/link'; export default function Inicio() {
    return (
        <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "500px", padding: "50px" }}>
            <Link href="/perfil" style={{ textDecoration: "none" }}>
                <Cards
                    nombre={"Acordes"}>
                </Cards>
            </Link>
            <Cards nombre={"Tablaturas"}></Cards>
            <Cards nombre={"Videos"}></Cards>
        </div>
    )
}