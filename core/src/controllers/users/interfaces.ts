import { Request, Response } from "express";

export interface IUserController {
  getUserList: (req: Request, res: Response) => void;
  getUserByID: (req: Request, res: Response) => void;
  createUser: (req: Request, res: Response) => void;
  updateUser: (req: Request, res: Response) => void;
  deleteUser: (req: Request, res: Response) => void;
}
