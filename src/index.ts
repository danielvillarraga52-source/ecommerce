import server from "./server.js";
import { PORT } from "./config/envs.js";




server.listen(PORT,()=>{
    console.log(`puerto escuchado en el puerto ${PORT}`)
})