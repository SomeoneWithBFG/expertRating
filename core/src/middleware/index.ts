import { Request, Response, NextFunction } from "express";

import ExecJWT from "./ExecJWT";
import isAuth from "./isAuth";

class Middleware {
  executeJWT: (req: Request, res: Response, next: NextFunction) => Promise<void>;
  isAuth: (req: Request, res: Response, next: NextFunction) => void;

  constructor() {
    this.executeJWT = ExecJWT;
    this.isAuth = isAuth;
  }
}

export default new Middleware();
