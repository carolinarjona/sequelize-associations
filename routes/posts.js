const express = require("express");
const roleValidation = require("../middleware/roleValidation");
const postService = require("../services/postService");
const router = express.Router();

router.get("/all", roleValidation("user"), async (req, res, next) => {
  try {
    const post = await postService.getAllPosts();
    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", roleValidation(["user", "mods"]), async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await postService.getPost(id);
    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    await postService.createPost(req.body);
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await postService.deletePost(id);
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await postService.editPost(id, req.body);
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
