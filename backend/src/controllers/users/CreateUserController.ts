import { Request, Response } from "express";
import CreateUserService from "../../services/users/CreateUserService";

const CreateUserController = async (req: Request, res: Response) => {

    const user = await CreateUserService()
    return res.json(user)
}

export default CreateUserController;