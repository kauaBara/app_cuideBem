import { Router } from "express";
import CreateUserController from "../controllers/users/CreateUserController";

const Route = Router();

Route.get('/', CreateUserController)

export default Route;