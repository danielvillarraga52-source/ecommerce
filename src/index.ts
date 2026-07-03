import "reflect-metadata";
import server from "./server.js";
import { PORT } from "./config/envs.js";
import { AppDataSource } from "./config/data-source.js";

AppDataSource.initialize()

    .then(res=>{
        console.log("base de datos creada y conectada con exito.")
        server.listen(PORT,()=>{
            console.log(`puerto escuchado en ${PORT}`);
        })
    })