import { createConnection, Connection } from "typeorm";

class DBConnector {
  connector: Connection;

  createConnection = async () => {
    this.connector = await createConnection({
      type: "postgres",
      host: process.env.DB_HOST,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DB,
      entities: ["dist/models/dbm/*{.ts,.js}"],
      migrations: ["dist/migrations/*{.ts,.js}"],
      logging: true,
    });
    const isMigrationsNeed = await this.connector.showMigrations();
    if (isMigrationsNeed) {
      console.log("STARTING MIGRATION");
      await this.connector.runMigrations();
      console.log("MIGRATION SUCCEED");
    }
  };
}

export default new DBConnector();
