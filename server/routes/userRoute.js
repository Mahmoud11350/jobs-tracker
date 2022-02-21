const express = require("express");
const auth = require("../middleware/auth");
const { loginUser, logoutUser, newUser } = require("../controllers/users");

const router = express.Router();

router.route("/login").post(loginUser);
router.route("/new").post(newUser);
router.route("/logout").post(auth, logoutUser);

module.exports = router;
