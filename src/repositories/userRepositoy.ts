import { AppDataSource } from "../config/data-source.js";
import { User } from "../Models/User.js";

const UserRepository = AppDataSource.getRepository(User);

export default UserRepository