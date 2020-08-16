const express = require("express");
const mongoose = require("mongoose");

const app = express();

// middleware
app.use(express.static("public"));

// view engine
app.set("view engine", "ejs");

// database connection
const dbURI =
  "mongodb+srv://dbUser:3kc8tHB5DA5ZsbqV@cluster0.vmcof.mongodb.net/user";
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
app.get("/", (req, res) => res.render("home"));
app.get("/smoothies", (req, res) => res.render("smoothies"));
