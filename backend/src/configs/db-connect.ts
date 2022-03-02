import { createConnection } from "typeorm";
import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";
import { CreateUserMigration1646212358438 } from "../migrations";
import { User } from "../models/entities";

/**
 * Set up mysql
 */
export const connectDB = async () => {
  const databaseData: MysqlConnectionOptions = {
    type: process.env.DB_TYPE as "mysql" | "mariadb",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [User],
    migrations: [CreateUserMigration1646212358438],
  };

  const connection = await createConnection(databaseData);

  await connection.synchronize(true);
  await connection.runMigrations();
};
