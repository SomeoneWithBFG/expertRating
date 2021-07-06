import { Request, Response } from "express";

import R from "../../repository";

import { IUserService } from "./interfaces";


class UserService implements IUserService {
  getList = async (req: Request, res: Response) => {
    const result = await R.db.users.getList();

    if (result instanceof Error) 
      res.json({ error: result});
    res.json({ value: result});
  };

  getByID = async (req: Request, res: Response) => {
    const result = await R.db.users.getByID(req.query.id as string);

    if (result instanceof Error) 
      res.json({ error: result });
    res.json({ value: result });
  }

  create = async (req: Request, res: Response) => {
      const result = await R.db.users.create(req.body);
      console.log(result)
      if (result instanceof Error) 
        res.json({ error: result });
      res.json({ value: result });
  };

  update = async (req: Request, res: Response) => {
    if (!req.body.id)
      res.json({ error: new Error("no id") })
    const result = await R.db.users.update(req.body.id, req.body);
    console.log(result)
    if (result instanceof Error) 
      res.json({ error: result });
    res.json({ value: result });
  };

  delete = async (req: Request, res: Response) => {
    const result = await R.db.users.delete(req.query.id as string);

    return res.json({ value: result });
  };
}

export default new UserService();
