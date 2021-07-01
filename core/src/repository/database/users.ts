import { User } from "@models/dbm/User";

import { IUsersRepository } from "./interfaces";
import { IUserDTM } from "@models/dtm/User";

import DBConnector from "@src/repository/database/connector";

class UsersRepository implements IUsersRepository {
  getList = async () => {
    try {
      const response = await DBConnector.connector?.getRepository(User).find();
      return { value: response };
    } catch (e) {
      return { error: e };
    }
  };

  getByID = async (id: string) => {
    try {
      const response = await DBConnector.connector?.getRepository(User).findOne(id);
      if (!response) return { error: new Error('not found')}
      return { value: response };
    } catch (e) {
      return { error: e };
    }
  }

  create = async (data: IUserDTM) => {
    try {
      const response = await DBConnector.connector
        ?.getRepository(User)
        .save({
          ...data,
        });
      return { value: response };
    } catch (e) {
      return { error: e };
    }
  };

  update = async (id: string, data: IUserDTM) => {
    try {
      const response = await DBConnector.connector
        ?.getRepository(User)
        .update(id, {
          ...data,
        });
      return { value: response.raw };
    } catch (e) {
      return { error: e };
    }
  };

  delete = async (id: string) => {
    try {
      const response = await DBConnector.connector
        ?.getRepository(User)
        .delete(id);
      return { value: !!response.affected };
    } catch (e) {
      return { error: e };
    }
  };

  checkLogin = async (login: string) => {
    try {
      const response = await DBConnector.connector
        ?.getRepository(User)
        .findOne({ where: { login: login } });

      return { value: response };
    } catch (e) {
      return { error: e };
    }
  };

  login = async (login: string, password: string) => {
    try {
      const response = await DBConnector.connector
        ?.getRepository(User)
        .findOne({ where: { login: login, password: password } });

      return { value: response };
    } catch (e) {
      return { error: e };
    }
  };
}

export default new UsersRepository();
