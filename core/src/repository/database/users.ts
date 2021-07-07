import { User } from "../../models/dbm/User";

import { IUsersService } from "./interfaces";
import { IUserDTM } from "../../models//dtm/User";

import DBConnector from "./connector";

class UsersService implements IUsersService {
  UserRepository = () => {
    return DBConnector.connector?.getRepository(User)
  }

  getUserList = async () => {
    try {
      const response = await this.UserRepository().find();
      return response ;
    } catch (e) {
      return e;
    }
  };

  getUserByID = async (id: string) => {
    try {
      const response = await this.UserRepository().findOne(id);
      if (!response) return 'User not found'
      return response;
    } catch (e) {
      return e;
    }
  }

  createUser = async (data: IUserDTM) => {
    try {
      const response = await this.UserRepository().save(data);
      return response;
    } catch (e) {
      return e;
    }
  };

  updateUser = async (id: string, data: IUserDTM) => {
    try {
      const response = await this.UserRepository()
        .update(id, {
          ...data,
        });
      return response.affected;
    } catch (e) {
      return e;
    }
  };

  deleteUser = async (id: string) => {
    try {
      const response = await this.UserRepository().delete(id);
      return !!response.affected;
    } catch (e) {
      return e;
    }
  };
}

export default new UsersService();
