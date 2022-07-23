const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
require("dotenv").config();

const app = express();

//Set up mongoose connection
const mongoose = require("mongoose");
const mongoDB = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@hackunamatata.2hrr5ch.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

const indexRouter = require("./routes/index");
const userRouter = require("./routes/user.js");
const postsRouter = require("./routes/posts.js");
const reportsRouter = require("./routes/reports.js");
const trashcansRouter = require("./routes/trashcans.js");

app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/posts", postsRouter);
app.use("/reports", reportsRouter);
app.use("/trashcans", trashcansRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
