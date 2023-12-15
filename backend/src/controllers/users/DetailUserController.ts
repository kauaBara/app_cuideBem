import { Request, Response } from "express";
import DetailUserService from "../../services/users/DetailUserService";

const DetailUserController = async (req: Request, res: Response) => {
    const user_id = req.user_id
    const user = await DetailUserService({ user_id })
    return res.json(user)
}

export default DetailUserController;