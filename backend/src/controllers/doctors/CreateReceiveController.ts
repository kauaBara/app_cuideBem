import { Request, Response } from "express";
import CreateReceiveService from "../../services/doctors/CreateReceiveService";

const CreateReceiveController = async (req: Request, res: Response) => {
  const user = await CreateReceiveService();
  return res.json(user);
};

export default CreateReceiveController;
