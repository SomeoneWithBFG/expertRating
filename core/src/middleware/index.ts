import { Request, Response, NextFunction } from "express";

import ValidateJWT from "./ValidateJWT";

class Middleware {
  validateJWT: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void>;

  constructor() {
    this.validateJWT = ValidateJWT;
  }
}

export default new Middleware();
