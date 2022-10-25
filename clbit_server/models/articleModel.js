const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const articleSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  Title: {
    type: String,
    required: true,
  },
  Content: {
    type: String,
  },
});
module.exports = mongoose.model("Article", articleSchema);
