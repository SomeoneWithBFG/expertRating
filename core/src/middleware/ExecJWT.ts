import { Request, Response, NextFunction } from "express";
import AuthService from "@services/authService";

const execJWT = async (req: Request, res: Response, next: NextFunction) => {
  let token = req.header("Authorization");
  if (token) {
    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length);
    }
    const value= await AuthService.verify(token);
    if (value instanceof Error) {
      req.body.user = false;
    }
    else {
      req.body.user = value;
    }
  }
  next();
};

export default execJWT;
