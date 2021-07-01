import { IFuncResultModel } from "@models/common/FunctionModel";
import { User } from "@models/dbm/User";
import {
  IUserDTM,
} from "@models/dtm/User";

export interface IUserService {
  getList: () => Promise<IFuncResultModel<User[]>>;
  getByID: (id: string) => Promise<IFuncResultModel<User>>;
  create: (data: IUserDTM) => Promise<IFuncResultModel<User>>;
  update: (data: IUserDTM) => Promise<IFuncResultModel<User>>;
  delete: (id: string) => Promise<IFuncResultModel<boolean>>;
}
