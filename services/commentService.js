const commentRepository = require("../repositories/commentRepository");

exports.getAllComments = async () => {
  return await commentRepository.findAllComents();
};

exports.createComment = async (comment) => {
  if (!comment.content) {
    throw new Error("You must provide a content to create a commentary");
  }
  await commentRepository.insertComment(comment);
};

exports.deleteComment = async (id) => {
  await commentRepository.dropComment(id);
};
