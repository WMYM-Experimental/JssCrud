const User = require("../models/User");
const usersController = {};

usersController.renderSignForm = (req, res) => {
  res.render("users/signup");
};

usersController.renderSignUp = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  const errors = [];
  if (password != confirmPassword) {
    errors.push({ text: "Passwords don't match" });
  }
  if (password.length < 6) {
    errors.push({ text: "Passwords length must be 6 characters at least" });
  }
  if (errors.length > 0) {
    res.render("users/signup", { errors, name, email });
  } else {
    const userEmail = await User.findOne({ email: email });
    if (userEmail) {
      req.flash("errorMssg", "Email already used");
      res.render("users/signup");
    } else {
      const newUser = new User({ name, email, password });
      await newUser.save();
      res.render("users/login");
    }
    res.send("ready to use sign");
  }
};

usersController.renderLoginForm = (req, res) => {
  res.render("users/login");
};

usersController.renderLogin = (req, res) => {
  res.send("ready to use log");
};

usersController.renderLogout = (req, res) => {
  res.send("log out");
};

module.exports = usersController;
