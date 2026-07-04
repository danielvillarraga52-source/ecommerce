import "dotenv/config";

export const PORT = process.env.PORT;


//------------------------------------------------------------------------------
if(!process.env.JWT_SECRET){
    throw Error("la variable de entorno de jwt no esta definida");
}
export const claveJwt=process.env.JWT_SECRET