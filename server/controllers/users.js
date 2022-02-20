const User = require("../models/userModel");
const newUser = async (req, res) => {
  const user = await User.create(req.body);
  res.status(200).json({ user });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.loginWithCredintails(email, password);
  const token = await user.getAuthToken();
  res.status(201).json({ user, token });
};
const logoutUser = async (req, res) => {
  res.send("Logout User");
};

module.exports = {
  newUser,
  loginUser,
  logoutUser,
};
