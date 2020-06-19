const express = require("express");
const router = express.Router();
const { getAllPosts } = require("../models/index");

router.get("/posts", async (req, res) => {
  const result = await getAllPosts();
  res.json(result);
});

router.post("/posts", async (req, res) => {
  const { body } = req;
  const result = await createPost(body);
  if (result) {
    res.json({ success: true, message: "post created" });
  }
});

module.exports = router;
