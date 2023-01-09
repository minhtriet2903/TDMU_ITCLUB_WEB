const OnlineContestRanking = require("../models/onlineContestRanking");

exports.getAll = (req, res) => {
  OnlineContestRanking.find()
    .then((allOnlineContestRanking) => {
      res.status(200).json({
        success: true,
        allOnlineContestRanking: allOnlineContestRanking,
      });
    })
    .catch((err) =>
      res.status(500).json({
        success: false,
      })
    );
};

exports.createOnlineContestRanking = async (req, res) => {
  const { userId, userName, contestId, contestName, score } = req.body;
  const onlineContestRanking = new OnlineContestRanking({
    userId: userId,
    userName: userName,
    contestId: contestId,
    contestName: contestName,
    Score: score,
  });

  return onlineContestRanking
    .save()
    .then((newOnlineContestRanking) => {
      return res.status(201).json({
        success: true,
        message: "New Online Contest Ranking created successfully",
        newOnlineContestRanking: newOnlineContestRanking,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Server error. Please try again.",
        error: error.message,
      });
    });
};
