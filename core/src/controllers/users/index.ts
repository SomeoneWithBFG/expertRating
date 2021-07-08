import { Request, Response } from "express";

import UsersRepository from "@repository/database/users"

import { IUserController } from "./interfaces";

import MessageGenerator from "@services/messageGenerator";

class UserController implements IUserController {
  getUserList = async (req: Request, res: Response) => {
    const result = await UsersRepository.getUserList();
    
    res.json(result);
  };

  getUserByID = async (req: Request, res: Response) => {
    if (!req.query.id) {
      res.json(MessageGenerator.createMessage(404, "error", "User with this ID not found"))
      return;
    }
    const result = await UsersRepository.getUserByID(req.query.id as string);

    res.json(result);
  }

  createUser = async (req: Request, res: Response) => {
    if (!req.body.name) {
      res.json(MessageGenerator.createMessage(500, "error","User must have a name"))
      return;
    }
    const result = await UsersRepository.createUser(req.body);

    res.json(result);
  };

  updateUser = async (req: Request, res: Response) => {
    if (!req.body.id) {
      res.json(MessageGenerator.createMessage(404, "error", "User with this ID not found"))
      return;
    }
    const isUpdated = await UsersRepository.updateUser(req.body.id, req.body);
    if (isUpdated) {
      const result = await UsersRepository.getUserByID(req.body.id);

      res.json(result);
      return;
    }
    else {
      res.json(isUpdated);
      return;
    }
  };

  deleteUser = async (req: Request, res: Response) => {
    if (!req.query.id) {
      res.json(MessageGenerator.createMessage(404, "error", "User with this ID not found"))
      return;
    }
    const wasDeleted = await UsersRepository.deleteUser(req.query.id as string);
    if (wasDeleted) {
      const result = req.query.id;

      res.json(result);
      return;
    }
    else {
      res.json(wasDeleted);
      return;
    }
};
}

export default new UserController();
