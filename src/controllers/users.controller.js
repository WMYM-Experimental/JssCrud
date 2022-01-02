const Note = require("../models/Note");
const usersController = {};

usersController.renderSignForm = (req, res) => {
  res.render("users/signup");
};

module.exports = usersController;
