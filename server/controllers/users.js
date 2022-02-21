const User = require("../models/userModel");

const newUser = async (req, res) => {
  const user = await User.create(req.body);
  const token = await user.getAuthToken();
  res.status(200).json({ user, token });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.loginWithCredintails(email, password);
  const token = await user.getAuthToken();
  res.status(201).json({ user, token });
};
const logoutUser = async (req, res) => {
  req.user.tokens = req.user.tokens.filter(
    (token) => token.token !== req.token
  );
  await req.user.save();
  res.status(200).json("user Loged out ");
};

module.exports = {
  newUser,
  loginUser,
  logoutUser,
};
