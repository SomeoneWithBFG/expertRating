import connector from "./connector";
import UsersRepository from "./users";

import IDB, {
  IConnector,
  IUsersRepository,
} from "./interfaces";

class DB implements IDB {
  connector: IConnector;
  users: IUsersRepository;

  constructor() {
    this.connector = connector;
    this.users = UsersRepository;
  }
}

export default new DB();
