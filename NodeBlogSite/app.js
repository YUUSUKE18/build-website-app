const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();
const Post = require("./models/post");

const dbURI =
  "mongodb+srv://yuusuke:test1234@node--blog-uonsy.mongodb.net/note-posts?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

app.set("view engine", "ejs");

//middlewear & static
app.use(express.static("public"));
app.use(morgan("dev"));

// app.get("/add-posts", (req, res) => {
//   const post = new Post({
//     title: "hello react",
//     date: "2020/06/26",
//     body: "react hello react",
//   });

//   post
//     .save()
//     .then((result) => {
//       res.send(result);
//     })
//     .then((err) => {
//       console.log(err);
//     });
// });

// app.get("/all-posts", (req, res) => {
//   Post.find()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get("/single-post", (req, res) => {
//   Post.findById("5ef4bccfbc8b09e2c8bb87bf")
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs", (req, res) => {
  Post.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "All Posts", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/create/blog", (req, res) => {
  res.render("create", { title: "Post Blog" });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
