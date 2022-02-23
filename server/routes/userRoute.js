const express = require("express");
const auth = require("../middleware/auth");
const { loginUser, logoutUser, newUser } = require("../controllers/users");

const userRouter = express.Router();

userRouter.route("/login").post(loginUser);
userRouter.route("/new").post(newUser);
userRouter.route("/logout").post(auth, logoutUser);

module.exports = userRouter;
