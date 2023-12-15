import { Router } from "express";
import CreateUserController from "../controllers/users/CreateUserController";
import AuthUserController from "../controllers/users/AuthUserController";
import authenticate from "../middlewares/autenticate";
import DetailUserController from "../controllers/users/DetailUserController";

const Route = Router();

// Rotas de Usuario
// ===================
Route.post('/user', CreateUserController)
Route.post('/login', AuthUserController)
Route.get('/me', authenticate, DetailUserController)

export default Route;