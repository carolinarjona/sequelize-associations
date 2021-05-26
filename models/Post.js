const { DataTypes, UUIDV4 } = require("sequelize");

const dbConnection = require("../config/db");

const Post = dbConnection.define("Post", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
  },
  content: {
    type: DataTypes.TEXT,
  },
});

module.exports = Post;
