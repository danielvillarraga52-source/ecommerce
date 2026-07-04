import type { Request, Response } from "express";
import { postUserService, getAllUsersService} from "../services/userService.js"; 
import type { User } from "../Models/User.js";



export const getAllUsersController=async(req:Request,res:Response)=>{
        try {
            const allUser :User[]= await getAllUsersService();
            res.status(200).json(allUser);
        } catch (error) {
            res.status(200).json({error:"error al encontrar los usuarios"});
        }
};

export const getByIdUserController=async(req:Request,res:Response)=>{
    res.send("prueba by Id");
};

export const postUser=async(req:Request,res:Response)=>{
    try {
        const {name,email,password,role,createdAt}=req.body;
        const {user,token} = await postUserService({name,email,password,role,createdAt});
        res.status(200).json({user,token});
    } catch (error) {
        res.status(400).json({error:"error al crear nuevo registro"})
    }
};

export const putUser=async(req:Request,res:Response)=>{
    res.send("ruta put");
};
export const deleteUser=async(req:Request,res:Response)=>{
    res.send("ruta delete");
};