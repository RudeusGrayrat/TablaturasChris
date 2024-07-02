import { NextApiRequest, NextApiResponse } from "next";

export default function saludar(req: NextApiRequest, res: NextApiResponse){
    res.status(200).json({message: "Hola mundo desde el servidor"})
    
}