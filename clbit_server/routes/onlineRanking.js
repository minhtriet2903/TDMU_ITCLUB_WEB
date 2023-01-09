const express = require("express");
const onlineRankingController = require("../controllers/onlineRankingController");

const router = express.Router();

router.get("/onlineRanking", onlineRankingController.getAll);
router.post("/onlineRanking", onlineRankingController.createOnlineRanking);

module.exports = router;
