const express = require("express");
const app = express();

app.listen(3000);

app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});

app.use((req, res) => {
  res.status(404).sendFile(__dirname + "/views/404.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/about-us", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});
