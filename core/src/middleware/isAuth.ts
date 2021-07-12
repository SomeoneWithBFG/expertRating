import { Request, Response, NextFunction } from "express";

import MessageGenerator from "@src/services/messageGenerator";

const isAuth = (req: Request, res: Response, next: NextFunction) => {
  if (!req.body.user) {
    res.json(MessageGenerator.createMessage(401, "error", "Token is not defined or not valid"));
  }
  else {
    delete req.body.user;
    next();
  }
};

export default isAuth;
