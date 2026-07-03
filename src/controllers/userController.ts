import type { Request, Response } from "express";


export const getAllUsersController=async(req:Request,res:Response)=>{
        res.send("prueba get All");
};

export const getByIdUserController=async(req:Request,res:Response)=>{
    res.send("prueba by Id");
};

export const postUser=async(req:Request,res:Response)=>{
    res.send("ruta post");
};

export const putUser=async(req:Request,res:Response)=>{
    res.send("ruta put");
};
export const deleteUser=async(req:Request,res:Response)=>{
    res.send("ruta delete");
};