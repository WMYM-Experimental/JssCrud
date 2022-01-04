const Note = require("../models/Note");
const usersController = {};

usersController.renderSignForm = (req, res) => {
  res.render("users/signup");
};

usersController.renderSignUp = (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  const errors = [];
  if (password != confirmPassword) {
    errors.push({ text: "Passwords don't match" });
  }
  if (password.length < 6) {
    errors.push({ text: "Passwords length must be 6 characters at least" });
  }
  if (errors.length > 0) {
    res.render("users/signup", { errors });
  } else {
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
