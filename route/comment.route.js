const express = require("express");
const router = express.Router();
const commentController = require("./../controller/comment.controller");

router.post("/", commentController.create);
router.put("/", commentController.update);
router.delete("/", commentController.delete);

module.exports = router;