const Comment = require("../models/Comment");
const User = require("../models/User");
const Post = require("../models/Post");

exports.findAllComents = async () => {
  return await Comment.findAll({
    include: [
      { model: User, attributes: ["name"] },
      { model: Post, attributes: ["id"] },
    ],
  });
};

exports.insertComment = async (comment) => {
  return await Comment.create(comment);
};

exports.dropComment = async (id) => {
  return await Comment.destroy({ where: { id } });
};
