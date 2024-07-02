import { Sequelize } from "sequelize";

const sequelize = new Sequelize("facebook", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => console.log("db connected successfully"))
  .catch((err) => console.log(err));

export default sequelize;
