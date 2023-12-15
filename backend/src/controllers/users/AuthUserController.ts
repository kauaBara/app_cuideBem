import { Request, Response } from "express";
import AuthUserService from "../../services/users/AuthUserService";

const AuthUserController = async (req: Request, res: Response) => {

    const { email, password, crm } = req.body
    
    const user = await AuthUserService({ email, password, crm })
    return res.json(user)
}

export default AuthUserController;