const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { NotFoundError, BadRequest } = require("../errors");
const validator = require("validator");
require("dotenv").config();

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name must be provided"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "email must be provided"],
    trim: true,
    unique: true,
    validate(email) {
      if (!validator.isEmail(email)) {
        throw new Error("Please Provide  Email Adress");
      }
    },
  },
  password: {
    type: String,
    required: [true, "password must be provided"],
    minlength: 8,
  },
  tokens: [{ token: { type: String, required: true } }],
});

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  delete userObject.tokens;

  return userObject;
};

userSchema.statics.loginWithCredintails = async function (email, password) {
  const user = await User.findOne({ email });
  if (!user) {
    throw new NotFoundError("Wrong Email");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new BadRequest("Wrong Password ");
  }
  return user;
};
userSchema.methods.getAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id }, process.env.SECRET_TOKEN);
  user.tokens = user.tokens.concat({ token });
  user.save();
  console.log(user.tokens);
  return token;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
