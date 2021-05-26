const dbConnection = require("../config/db");
const User = require("../models/User");
const Post = require("../models/Post");
const Comment = require("../models/Comment");

const loadModels = () => {
  User.hasMany(Post, {
    foreignKey: {
      allowNull: false,
    },
  });
  Post.belongsTo(User);
  Post.hasMany(Comment, {
    foreignKey: {
      allowNull: false,
    },
  });
  Comment.belongsTo(User);

  dbConnection.sync().then(() => console.log("Everything is ok 👌!"));
};

module.exports = loadModels;
