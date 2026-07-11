import { Router } from "express";
import { getAllUsersController,getByIdUserController,postUser,putUser,deleteUser } from "../controllers/userController.js";
import { verifyToken } from "../midlewares/verificaionToken.js";
const usersRoutes=Router();

usersRoutes.get("/",verifyToken,getAllUsersController);
usersRoutes.post("/crear",postUser);
usersRoutes.put("/editar",verifyToken,putUser);
usersRoutes.delete("/eliminar",verifyToken,deleteUser);
usersRoutes.get("/:id",verifyToken,getByIdUserController);


export default usersRoutes;