import { Router } from "express";
import usersRoutes from "./usersRoutes.js";

const mainRoutes = Router();

mainRoutes.use("/users",usersRoutes);


export default mainRoutes;