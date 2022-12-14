const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const ticketSchema = new mongoose.Schema({
  CreatedName: {
    type: String,
  },
  CurrentStudentNumber: {
    type: Number,
    default: 0,
  },
  TotalStudentNumber: {
    type: Number,
  },
  IsAllowToRegister: {
    type: Boolean,
    default: true,
  },
  LastRegisterDate: {
    type: Date,
  },
  CreatedDate: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("ticket", ticketSchema);
