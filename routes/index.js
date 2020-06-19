const express = require("express");
const router = express.Router();
const {
  getAllPosts,
  createPost,
  getById,
  patchPost
} = require("../models/index");

router.get("/posts", async (req, res) => {
  const result = await getAllPosts();
  res.json(result);
});

router.get("/posts/:id", async (req, res) => {
  const { id } = req.params;
  const result = await getById(id);
  res.json(result);
});

router.post("/posts", async (req, res) => {
  const { body } = req;
  const result = await createPost(body);
  if (result) {
    res.json({ success: true, message: "post created" });
  }
});

router.patch("/posts/:id", async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  const result = await patchPost(body, id);
  if (result) {
    res.json({ sucess: true, message: `you have updated post ${id}` });
  }
  res.json({ success: false, message: `patch request failed` });
});

module.exports = router;
