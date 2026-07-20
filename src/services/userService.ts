import type { User } from "../Models/User.js";
import type IUserDto from "../dto/userData.js";
import type IlogueoDto from "../dto/loginData.js";
import UserRepository from "../repositories/userRepositoy.js";
import jwt  from "jsonwebtoken";
import { claveJwt } from "../config/envs.js";
import bcrypt from "bcrypt";

export const getAllUsersService=async():Promise<User[]>=>{
    const allUsers = await UserRepository.find();
    return allUsers 

}

export const postUserService = async (userData: IUserDto): Promise<{ user: User, token: string }> => {
    const salts = await bcrypt.genSalt(10);
    // CORREGIDO: Paréntesis cerrado al final
    const hash = await bcrypt.hash(userData.password, salts);
    
    const registerUser = await UserRepository.create({ ...userData, password: hash });
    const results = await UserRepository.save(registerUser);
    
    // CORREGIDO: Añadimos el id al token para que coincida con tu middleware
    const token = jwt.sign({ id: results.id, role: results.role }, claveJwt, { expiresIn: '1h' });
    
    return {
        user: results,
        token
    };
};

export const logueoService = async(userData:IlogueoDto):Promise<{user:User,token:string}>=>{
    if(!userData.email||!userData.password){
        throw Error("faltan datos de acceso");
    };
    const user=await UserRepository.findOneBy({email:userData.email});
    if(!user){
        throw Error("error no hay usuario");
    }

    const isMatch = await bcrypt.compare(userData.email,userData.password);
    if(!isMatch){
        throw Error("Contraseña no coincide");
    }
    const token = jwt.sign ( { id:user.id,role:user.role} , claveJwt , { expiresIn : '1h' } ) ;

    return {user,token};
}