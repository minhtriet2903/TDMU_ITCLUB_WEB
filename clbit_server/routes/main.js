const express = require("express");
const ArticleController = require("../controllers/articleController");

const router = express.Router();

router.get("/article", ArticleController.getAll);
router.post("/upload", ArticleController.uploadAvatar);

module.exports = router;
