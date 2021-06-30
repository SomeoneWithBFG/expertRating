import connector from "./connector";

import IDB, {
  IConnector,
} from "./interfaces";

class DB implements IDB {
  connector: IConnector;

  constructor() {
    this.connector = connector;
  }
}

export default new DB();
