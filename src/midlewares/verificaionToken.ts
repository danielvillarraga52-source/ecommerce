import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { claveJwt } from "../config/envs.js";


export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ") || !authHeader.split(" ")[1]) {
    res.status(401).json({ error: "Token no proporcionado o formato incorrecto." });
    return;
}
const token = authHeader.split(" ")[1];

    if(!token){
        res.status(401).json({error:"Token no proporcionado o formato incorrecto"})
        return
    }

    try {
        // Tipamos el payload para extraer el ID y tu rol estricto
        const payload = jwt.verify(token, claveJwt) as unknown as { id: string; role: "client" | "admin" };

        // Inyectamos los datos en el request usando el Type Cast (as any)
        (req as any).role = payload.role;
        (req as any).userId = payload.id; 

        next();
    } catch (error) {
        res.status(401).json({ error: "Token inválido o expirado." });
    }
};