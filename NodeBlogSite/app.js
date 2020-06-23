const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.listen(3000);

app.get("/", (req, res) => {
  const blogs = [
    { title: "Hello Node", date: "2020/06/23" },
    { title: "Hello Ejs", date: "2020/06/23" },
    { title: "Hello VS code", date: "2020/06/23" },
  ];
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/create/blog", (req, res) => {
  res.render("create", { title: "Post Blog" });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
