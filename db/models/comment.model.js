import { DataTypes } from "sequelize";
import sequelize from "../dbConn.js";

const commentModel = sequelize.define(
  "comment",
  {
    id: {
      type: DataTypes.INTEGER(10),
      autoIncrement: true,
      primaryKey: true,
    },
    content: {
      type: DataTypes.STRING(200),
      allowNull: false,
    }
  },
  { timestamps: true }
);
export default commentModel;
