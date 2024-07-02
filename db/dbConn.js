import { Sequelize } from "sequelize";

const sequelize = new Sequelize("blhe3honvcsya2fzaxkt", "uzmzbjwxae8uivpp", "dQRHxt5nMVyzJBB6ttaa", {
  host: "blhe3honvcsya2fzaxkt-mysql.services.clever-cloud.com",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => console.log("db connected successfully"))
  .catch((err) => console.log(err));

export default sequelize;
