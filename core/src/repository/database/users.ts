import { User } from "../../models/dbm/User";

import { IUsersRepository } from "./interfaces";
import { IUserDTM } from "../../models//dtm/User";

import DBConnector from "./connector";

class UsersRepository implements IUsersRepository {
  getList = async () => {
    try {
      const response = await DBConnector.connector?.getRepository(User).find();
      return response ;
    } catch (e) {
      return e;
    }
  };

  getByID = async (id: string) => {
    try {
      const response = await DBConnector.connector?.getRepository(User).findOne(id);
      if (!response) return new Error('not found')
      return response;
    } catch (e) {
      return e;
    }
  }

  create = async (data: IUserDTM) => {
    try {
      const response = await DBConnector.connector
        ?.getRepository(User)
        .save({
          ...data,
        });
      return response;
    } catch (e) {
      return e;
    }
  };

  update = async (id: string, data: IUserDTM) => {
    try {
      const response = await DBConnector.connector
        ?.getRepository(User)
        .update(id, {
          ...data,
        });
      return response.affected;
    } catch (e) {
      return e;
    }
  };

  delete = async (id: string) => {
    try {
      const response = await DBConnector.connector
        ?.getRepository(User)
        .delete(id);
      return !!response.affected;
    } catch (e) {
      return e;
    }
  };
}

export default new UsersRepository();
