import { Request, Response, NextFunction } from "express";

const isAuth = (req: Request, res: Response, next: NextFunction) => {
  if (req.body.user === undefined) {
    res.status(401).json({ status: "error", message: "Token is not defined" });
  }
  else if (req.body.user === false) {
    res.status(401).json({ status: "error", message: "Token is not valid" });
  }
  else {
    delete req.body.user;
    next();
  }
};

export default isAuth;
