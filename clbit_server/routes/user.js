const Router = require("express");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

const router = Router();

router.post("/users/register", authController.register);
router.post("/users/login", authController.login);
router.post("/users/checkPassword", authController.checkPassword);
router.get("/users", userController.getUsers);
router.get("/users/shippers", userController.getShippers);
router.get("/users/:id", userController.getUserById);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);
router.post("/users", userController.sendMail);

module.exports = router;
