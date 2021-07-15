import connector from "./connector";
import UsersService from "./users";

import IDB, { IConnector, IUsersService } from "./interfaces";

class DB implements IDB {
  connector: IConnector;
  users: IUsersService;

  constructor() {
    this.connector = connector;
    this.users = UsersService;
  }
}

export default new DB();
