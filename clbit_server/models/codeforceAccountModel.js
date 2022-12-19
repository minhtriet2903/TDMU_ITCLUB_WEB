const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const codeforceAccountSchema = new mongoose.Schema({
  UserName: {
    type: String,
  },
  LastSubmit: {
    type: Date,
  },
  AcceptedInLast100Submission: {
    type: String,
  },
  CreatedDate: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("codeforceAccount", codeforceAccountSchema);
