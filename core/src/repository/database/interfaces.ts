import { IFuncResultModel } from "@models/common/FunctionModel";
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
  getList: () => Promise<IFuncResultModel<User[]>>;
  getByID: (id: string) => Promise<IFuncResultModel<User>>;
  create: (data: IUserDTM) => Promise<IFuncResultModel<User>>;
  update: (id: string, data: IUserDTM) => Promise<IFuncResultModel<User>>;
  delete: (id: string) => Promise<IFuncResultModel<boolean>>;
}