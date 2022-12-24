const OnlineContestModel = require("../models/onlineContestModel");

exports.getAll = (req, res) => {
  OnlineContestModel.find()
    .then((allOnlineContests) => {
      res.status(200).json({
        success: true,
        allOnlineContests: allOnlineContests,
      });
    })
    .catch((err) =>
      res.status(500).json({
        success: false,
      })
    );
};

exports.createOnlineContest = async (req, res) => {
  const { contestName } = req.body;
  const onlineContest = new OnlineContestModel({
    ContestName: contestName,
  });

  return onlineContest
    .save()
    .then((newOnlineContest) => {
      return res.status(201).json({
        success: true,
        message: "New Online Contest created successfully",
        onlineContestModel: newOnlineContest,
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
