const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

// const db = mongoose.connection;

// mongoose.set("useNewUrlParser", true);
// mongoose.set("useFindAndModify", false);
// mongoose.set("useCreateIndex", true);
// mongoose.set("useUnifiedTopology", true);

app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  session({
    secret: process.env.SECRET || "demo-secret-123",
    resave: false,
    saveUninitialized: false,
  })
);

// const mongoURI = process.env.MONGODB_URI || "mongodb://localhost:27017/comparison-movie-db";

// mongoose.connect(mongoURI, { useNewUrlParser: true }, () => console.log("MongoDB connection established:", mongoURI));

// db.on("error", (err) => console.log(err.message + " is mongod not running?"));
// db.on("connected", () => console.log("mongo connected: ", mongoURI));
// db.on("disconnected", () => console.log("mongo disconnected"));

const usersControllers = require("./controllers/users");
app.use("/users", usersControllers);

const moviesController = require("./controllers/movies");
app.use("/movies", moviesController);

app.use(express.urlencoded({ extended: false }));

// const sessionsControllers = require("./controllers/sessions");
// app.use("/sessions", sessionsControllers);

app.get("/*", (req, res) => {
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log("Watching Movies on Port", PORT);
});
