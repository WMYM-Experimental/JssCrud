const User = require("../models/User");
const passport = require("passport");
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
    res.render("users/signup", {
      errors,
      name,
      email,
      password,
      confirm_password,
    });
  } else {
    // verifying email
    const userEmail = await User.findOne({ email: email });
    if (userEmail) {
      req.flash("errorMssg", "Email already in use.");
      console.log("------------ERROR---------------");
      res.redirect("/users/signup");
    } else {
      // Saving a New User
      const newUser = new User({ name, email, password });
      newUser.password = await newUser.encryptPassword(password);
      await newUser.save(); // Saving a New User
      req.flash("successMssg", "You are registered, Now Log in c: .");
      res.redirect("/users/login");
    }
  }
};

usersController.renderLoginForm = (req, res) => {
  res.render("users/login");
};

usersController.renderLogin = passport.authenticate("local", {
  successRedirect: "/notes",
  failureRedirect: "/users/login",
  failureFlash: true,
});

usersController.renderLogout = (req, res) => {
  res.send("log out");
};

module.exports = usersController;
