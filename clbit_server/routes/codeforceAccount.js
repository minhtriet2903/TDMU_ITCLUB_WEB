const express = require("express");
const CodeforceAccountController = require("../controllers/codeforceAccountController");

const router = express.Router();

router.get("/codeforceAccount", CodeforceAccountController.getAll);
router.post(
  "/codeforceAccount",
  CodeforceAccountController.createCodeforceAccount
);

module.exports = router;
