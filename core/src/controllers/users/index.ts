import { Request, Response } from "express";

import UsersRepository from "../../repository/database/users"

import { IUserController } from "./interfaces";

import MessageGenerator from "../../services/messageGenerator";


class UserController implements IUserController {
  getUserList = async (req: Request, res: Response) => {
    const result = await UsersRepository.getUserList();
    
    res.json(result);
  };

  getUserByID = async (req: Request, res: Response) => {
    if (!req.query.id) {
      res.json(MessageGenerator.createMessage("error","No id were sent"))
      return;
    }
    const result = await UsersRepository.getUserByID(req.query.id as string);

    res.json(result);
  }

  createUser = async (req: Request, res: Response) => {
    if (!req.body.name) {
      res.json(MessageGenerator.createMessage("error","User must have a name"))
      return;
    }
    const result = await UsersRepository.createUser(req.body);

    res.json(result);
  };

  updateUser = async (req: Request, res: Response) => {
    if (!req.body.id) {
      res.json(MessageGenerator.createMessage("error","No id were sent"))
      return;
    }
    const isUpdated = await UsersRepository.updateUser(req.body.id, req.body);
    if (isUpdated) {
      const result = await UsersRepository.getUserByID(req.body.id);

      res.json(result);
      return;
    }
    res.status(404).json(MessageGenerator.createMessage("error", "User not found"))
  };

  deleteUser = async (req: Request, res: Response) => {
    if (!req.query.id) {
      res.json(MessageGenerator.createMessage("error","No id were sent"))
      return;
    }
    const wasDeleted = await UsersRepository.deleteUser(req.query.id as string);
    if (wasDeleted) {
      const result = req.query.id;

      res.json(result);
      return;
    }
    res.status(404).json(MessageGenerator.createMessage("error", "User not found"))
  };
}

export default new UserController();
