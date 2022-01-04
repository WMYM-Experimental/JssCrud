/* ----------------------------------Require---------------------------------- */
require("dotenv").config();
require("./database");

/* ---------------------------------Init configuration------------------------ */
const DEFAULT_PORT = 3000;

const express = require("express"); //express
const { engine } = require("express-handlebars"); //for views and hbs files
const path = require("path"); //for handling directories and paths
const morgan = require("morgan"); //to see methods and what returns each one
const methodOverride = require("method-override"); //for delete method
const flash = require("connect-flash"); //to send messages from view to view
const session = require("express-session");

const app = express(); // express function return an object "app"

/* ------------------------------Project Settings------------------------------ */
app.set("port", process.env.PORT || DEFAULT_PORT);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  engine({
    extname: ".hbs",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaultLayout: "main",
  })
);
app.set("view engine", ".hbs");

/* ------------------------------Middlewares------------------------------- */
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false })); // configuration for obtaining data -no images-
app.use(methodOverride("_method"));
app.use(
  session({
    secret: "jessy",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());

/* ------------------------------Global Variables------------------------------ */
app.use((req, res, next) => {
  res.locals.successMssg = req.flash("successMssg");
  res.locals.errorMssg = req.flash("errorMssg");
  next();
});

/* ------------------------------Routes------------------------------------ */
app.use(require("./routes/index.routes"));
app.use(require("./routes/notes.routes"));
app.use(require("./routes/users.routes"));
/* ------------------------------Static Files------------------------------ */
app.use(express.static(path.join(__dirname, "public")));

/* ------------------------------Server listening------------------------------ */
app.listen(app.get("port"), () => {
  console.log("SERVER PORT", app.get("port")); //already working on port 3000
});
