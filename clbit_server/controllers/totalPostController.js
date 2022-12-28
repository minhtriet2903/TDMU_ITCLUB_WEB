const TotalPost = require("../models/totalPostModel");

exports.getAll = (req, res) => {
  TotalPost.find()
    .then((alltotalPost) => {
      res.status(200).json({
        success: true,
        TotalPost: alltotalPost,
      });
    })
    .catch((err) =>
      res.status(500).json({
        success: false,
      })
    );
};

exports.createtotalPost = async (req, res) => {
  const { createName, totalStudentNumber } = req.body;
  const totalpost = new totalPost({
    CreatedName: createName,
    TotalStudentNumber: totalStudentNumber,
  });

  return totalpost
    .save()
    .then((newTPost) => {
      return res.status(201).json({
        success: true,
        message: "New ticket created successfully",
        Course: newTPost,
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
