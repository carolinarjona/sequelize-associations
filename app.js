require("dotenv").config();

var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const loadModels = require("./models/relationship");
const cors = require("cors");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const postRouter = require("./routes/posts");
const commentsRouter = require("./routes/comments");
const errorHandler = require("./middleware/errorHandler");
const tokenValidation = require("./middleware/tokenValidation");

var app = express();

loadModels();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(tokenValidation);
app.use(cors());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/posts", postRouter);
app.use("/comments", commentsRouter);

app.use(errorHandler);

module.exports = app;
