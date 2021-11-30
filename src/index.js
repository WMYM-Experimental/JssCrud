/* ------------------------------Init and require------------------------------ */
const express = require("express"); //express
const methodOverride = require("method-override");
const session = require("express-session"); //for handling users sessions
const app = express(); // express fucntion return an object "app"
const path = require("path"); //for handling directories and paths

const exphbs = require("express-handlebars"); //for views and hbs files
const hbars = exphbs.create({
  defaultLayout: "main",
  layoutsDir: path.join(app.get("views"), "layouts"), //layouts path concatenation
  partialsDir: path.join(app.get("views"), "partials"), //partials path concatenation "like contact me or footer"
  extname: ".hbs",
});

/* ------------------------------Global Variables------------------------------ */
const DEFAULT_PORT = 3000;

/* ------------------------------Project Settings------------------------------ */
app.set("port", process.env.PORT || DEFAULT_PORT);
app.set("views", path.join(__dirname, "views"));
app.engine(".hbs", hbars.engine);
app.set("view engine", ".hbs");

/* ------------------------------MIddlewares------------------------------ */
app.use(express.urlencoded({ extended: false })); // configuration for obtaining data -no images-
app.use(methodOverride("_method"));
app.use(
  session({
    secret: "jessy",
    resave: true,
    saveUninitialized: true,
  })
);

/* ------------------------------Routes------------------------------ */
app.use(require("./routes/index"));
app.use(require("./routes/notes"));
app.use(require("./routes/users"));

/* ------------------------------Static Files------------------------------ */

/* ------------------------------Server listening------------------------------ */
app.listen(app.get("port"), () => {
  console.log("SERVER PORT", app.get("port")); //already working on port 3000
});
