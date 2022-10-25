const Article = require("../models/articleModel");
const multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/upload/images/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage }).single("file");

exports.uploadAvatar = function (req, res) {
  upload(req, res, function (err) {
    console.log(req.body);
    console.log(req.file);

    if (err) {
      return res.end("Error uploading file.");
    }
    res.json(req.file);
  });
};

exports.getAll = (req, res) => {
  Article.find()
    .then((allArticle) => {
      res.status(200).json({
        success: true,
        Article: allArticle,
      });
    })
    .catch((err) =>
      res.status(500).json({
        success: false,
      })
    );
};
