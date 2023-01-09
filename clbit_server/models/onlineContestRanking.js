const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const onlineContestRankingSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  userName: {
    type: String,
  },
  contestId: {
    type: String,
  },
  contestName: {
    type: String,
  },
  Ranking: {
    type: Number,
    default: 0,
  },
  Score: {
    type: Number,
    default: 0,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model(
  "onlineContestRanking",
  onlineContestRankingSchema
);
