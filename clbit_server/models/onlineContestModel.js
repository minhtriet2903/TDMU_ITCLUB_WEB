const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const onlineContestSchema = new mongoose.Schema({
  ContestName: {
    type: String,
  },
  ContestUrl: {
    type: String,
  },
  OrganitzedDate: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("onlineContest", onlineContestSchema);
