var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var mongoose = require("mongoose");
var logger = require("morgan");
const { MONGOURI } = require("./keys");
const port = 5000;
//mongodb connection
mongoose.connect(
  MONGOURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  (err) => {
    console.log("connected", err ? err : true);
  }
);

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// O8DBIbxlL9lJtgTj

app.use("/", indexRouter);
app.use("/users", usersRouter);

// connection to the port
app.listen(port, () => {
  console.log("Server is started at", port, "CC dug dug dug dug dug.......");
});
module.exports = app;
