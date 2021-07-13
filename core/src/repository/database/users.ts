import { User } from "@models/dbm/User";

import { IUsersService } from "./interfaces";
import { IUserDTM } from "@models/dtm/User";

import DBConnector from "./connector";

import MessageGenerator from "@services/messageGenerator";

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
      if (!response) return MessageGenerator.createMessage(404, "error", "User with this ID not found")
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
      if (!response.affected) {
        return MessageGenerator.createMessage(404, "error", "User with this ID not found")
      }
      return response.affected;
    } catch (e) {
      return e;
    }
  };

  deleteUser = async (id: string) => {
    try {
      const response = await this.UserRepository().delete(id);
      if (!response.affected) {
        return MessageGenerator.createMessage(404, "error", "User with this ID not found")
      }
      return !!response.affected;
    } catch (e) {
      return e;
    }
  };

  login = async (login: string, password: string) => {
    try {
      const response = this.UserRepository().findOne({ 
        where: { login: login, password: password } 
      });

      return response;
    } catch (e) {
      return e;
    }
  };
}

export default new UsersService();
