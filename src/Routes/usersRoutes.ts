import { Router } from "express";
import { getAllUsersController,getByIdUserController,postUser,putUser,deleteUser } from "../controllers/userController.js";

const usersRoutes=Router();

usersRoutes.get("/",getAllUsersController);
usersRoutes.get("/:id",getByIdUserController);
usersRoutes.post("/crear",postUser);
usersRoutes.put("/editar",putUser);
usersRoutes.delete("/eliminar",deleteUser);


export default usersRoutes;