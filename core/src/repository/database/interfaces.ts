import { User } from "@models/dbm/User";

import { IUserDTM } from "@models/dtm/User";

export interface IConnector {
  createConnection: () => void;
}

export default interface IDB {
  connector: IConnector;
  users: IUsersService;
}

export interface IUsersService {
  getUserList: () => Promise<User[]>;
  getUserByID: (id: string) => Promise<User>;
  createUser: (data: IUserDTM) => Promise<User>;
  updateUser: (id: string, data: IUserDTM) => Promise<User>;
  deleteUser: (id: string) => Promise<boolean>;
}
