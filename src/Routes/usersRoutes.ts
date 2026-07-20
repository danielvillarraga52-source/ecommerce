import { Router } from "express";
import { getAllUsersController,getByIdUserController,postUser,putUser,deleteUser,logueo } from "../controllers/userController.js";
import { verifyToken,verifyTokenAdmin } from "../midlewares/verificaionToken.js";
const usersRoutes=Router();

usersRoutes.get("/",verifyToken,verifyTokenAdmin,getAllUsersController);
usersRoutes.post("/crear",postUser);
usersRoutes.put("/editar",verifyToken,putUser);

//rutas generales jwt

usersRoutes.post("/logueo",logueo);

usersRoutes.delete("/eliminar",verifyToken,deleteUser);
usersRoutes.get("/:id",verifyToken,getByIdUserController);


export default usersRoutes;