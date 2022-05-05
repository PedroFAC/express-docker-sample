import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  host: "postgres",
  dialect: "postgres",
  port: "5432",
  username: "postgres",
  password: "password",
  database: "postgres",
});

export default sequelize;
