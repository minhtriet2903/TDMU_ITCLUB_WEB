const OnlineRankingModel = require("../models/onlineRankingModel");

exports.getAll = (req, res) => {
  OnlineRankingModel.find()
    .then((allOnlineRanking) => {
      res.status(200).json({
        success: true,
        allOnlineRanking: allOnlineRanking,
      });
    })
    .catch((err) =>
      res.status(500).json({
        success: false,
      })
    );
};

exports.createOnlineRanking = async (req, res) => {
  const { userId, userName } = req.body;
  const onlineRanking = new OnlineRankingModel({
    userId: userId,
    userName: userName,
  });

  return onlineRanking
    .save()
    .then((newOnlineRanking) => {
      return res.status(201).json({
        success: true,
        message: "New Online Ranking created successfully",
        newOnlineRanking: newOnlineRanking,
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
