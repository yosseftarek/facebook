import { DataTypes } from "sequelize";
import sequelize from "../dbConn.js";
import userModel from "./user.model.js";
import commentModel from "./comment.model.js";

const postModel = sequelize.define(
  "post",
  {
    id: {
      type: DataTypes.INTEGER(10),
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  { timestamps: true }
);
userModel.hasMany(postModel, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
postModel.belongsTo(userModel);

postModel.hasMany(commentModel, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
commentModel.belongsTo(postModel);

userModel.hasMany(commentModel, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
commentModel.belongsTo(userModel);

export default postModel;
