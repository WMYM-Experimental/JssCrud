const Note = require("../models/Note");
const usersController = {};

usersController.renderSignForm = (req, res) => {
  res.render("users/signup");
};

usersController.renderSignUp = (req, res) => {
  res.send("ready to use sign");
  console.log(req.body);
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
