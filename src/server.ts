import express from "express";
import morgan from "morgan";
import mainRoutes from "./Routes/mainRoutes.js";

const server = express();


server.use(morgan("dev"));
server.use(express.json());
server.use(mainRoutes);




export default server;