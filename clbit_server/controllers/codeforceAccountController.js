const CodeforceAccount = require("../models/codeforceAccountModel");

exports.getAll = (req, res) => {
  CodeforceAccount.find()
    .then((allCodeforceAccount) => {
      res.status(200).json({
        success: true,
        CodeforceAccount: allCodeforceAccount,
      });
    })
    .catch((err) =>
      res.status(500).json({
        success: false,
      })
    );
};

exports.createCodeforceAccount = async (req, res) => {
  const { userName, lastSubmit, acceptedInLast100Submission } = req.body;
  const codeforceAccount = new CodeforceAccount({
    UserName: userName,
    LastSubmit: lastSubmit,
    AcceptedInLast100Submission: acceptedInLast100Submission,
  });

  return codeforceAccount
    .save()
    .then((newCodeforceAccount) => {
      return res.status(201).json({
        success: true,
        message: "New CodeforceAccount created successfully",
        Course: newCodeforceAccount,
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
