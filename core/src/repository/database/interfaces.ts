import { User } from "@models/dbm/User";

import { IUserDTM } from "@models/dtm/User";

export interface IConnector {
  createConnection: () => void;
}

export default interface IDB {
  connector: IConnector;
  users: IUsersRepository;
}

export interface IUsersRepository {
  getList: () => Promise<User[]>;
  getByID: (id: string) => Promise<User>;
  create: (data: IUserDTM) => Promise<User>;
  update: (id: string, data: IUserDTM) => Promise<User>;
  delete: (id: string) => Promise<boolean>;
}
