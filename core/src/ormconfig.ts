import { ConnectionOptions } from 'typeorm';
 
const config: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DB,
  synchronize: true, 
  logging: false, 
  entities: [
    "src/models/dbm/*.ts" 
  ], 
  migrations: [ 
    "src/migration/**/*.ts" 
  ], 
  cli: { 
    "entitiesDir": "src/entity", "migrationsDir": "src/migration",
  } 
};

export = config;
