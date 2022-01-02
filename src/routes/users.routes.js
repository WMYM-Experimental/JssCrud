const { Router } = require("express");
const router = Router();
const {
  renderSignForm,
  renderSignUp,
  renderLoginForm,
  renderLogin,
  renderLogout,
} = require("../controllers/users.controller");

//Sign Up
router.get("/users/signup", renderSignForm);
router.post("/users/signup", renderSignUp);

//Log In
router.get("/users/login", renderLoginForm);
router.post("/users/login", renderLogin);

//log Out
router.get("/users/logout", renderLogout);

module.exports = router;
