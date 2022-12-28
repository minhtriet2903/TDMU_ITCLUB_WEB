const express = require("express");
const onlineContestController = require("../controllers/onlineContestController");

const router = express.Router();

router.get("/onlineContest", onlineContestController.getAll);
router.post("/onlineContest", onlineContestController.createOnlineContest);

module.exports = router;
