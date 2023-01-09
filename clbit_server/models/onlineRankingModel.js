const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const onlineRankingSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  userName: {
    type: String,
  },
  LastContest: {
    type: String,
  },
  CurrentRanking: {
    type: Number,
    default: 0,
  },
  LastRanking: {
    type: Number,
    default: 0,
  },
  updatedDate: {
    type: Date,
    default: Date.now,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("onlineRanking", onlineRankingSchema);
