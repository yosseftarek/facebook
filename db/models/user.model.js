import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../dbConn.js";
import bcrypt from "bcrypt";
const userModel = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER(10),
      autoIncrement: true,
      primaryKey: true,
    },
    userName: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(200),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    loginStatus: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  { timestamps: true }
);
//console.log(sequelize.models.user)
export default userModel;
