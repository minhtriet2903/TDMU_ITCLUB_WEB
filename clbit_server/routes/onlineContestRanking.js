const express = require("express");
const onlineContestRankingController = require("../controllers/onlineContestRankingController");

const router = express.Router();

router.get("/onlineContestRanking", onlineContestRankingController.getAll);
router.post(
  "/onlineContestRanking",
  onlineContestRankingController.createOnlineContestRanking
);

module.exports = router;
