const postRepository = require("../repositories/postRepository");
const HttpError = require("../utils/httpError");

exports.getAllPosts = async () => {
  const posts = await postRepository.findAllPosts();
  return posts;
};

exports.getPost = async (id) => {
  const post = await postRepository.findPostById(id);
  return post.toJSON();
};

exports.createPost = async (post) => {
  if (!post.title || !post.content) {
    throw new HttpError(
      400,
      "You must provide title and content to create post"
    );
  }
  await postRepository.insertPost(post);
};

exports.editPost = async (id, postDetails) => {
  await postRepository.updatePost(id, postDetails);
};

exports.deletePost = async (id) => {
  await postRepository.dropPost(id);
};
