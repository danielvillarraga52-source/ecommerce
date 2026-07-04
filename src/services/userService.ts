import type { User } from "../Models/User.js";
import type IUserDto from "../dto/userData.js";
import UserRepository from "../repositories/userRepositoy.js";
import jwt  from "jsonwebtoken";
import { claveJwt } from "../config/envs.js";
import bcrypt from "bcrypt";

export const getAllUsersService=async():Promise<User[]>=>{
    const allUsers = await UserRepository.find();
    return allUsers 

}

export const postUserService=async(userData:IUserDto):Promise<{user:User,token:string}>=>{
    const salts = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(userData.password,salts)
    const registerUser = await UserRepository.create({...userData,password:hash});
    const results= await UserRepository.save(registerUser);

    const token = jwt.sign ( { email: results.email } , claveJwt , { expiresIn : '1h' } ) ;
    return {user:results,
        token
    };

}