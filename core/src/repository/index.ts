import Config from "./config";
import Database from "./database";
import IDB from "./database/interfaces";

class Repository {
  config: any;
  db: IDB;

  constructor() {
    this.config = Config;
    this.db = Database;
  }

  connect = async () => {
    await this.db.connector.createConnection();
  };
}

export default new Repository();
