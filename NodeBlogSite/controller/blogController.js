const Post = require("../models/post");

const blog_index = (req, res) => {
  Post.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "All Posts", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

const blog_detail = (req, res) => {
  const id = req.params.id;

  Post.findById(id)
    .then((result) => {
      res.render("details", { blog: result, title: "Details" });
    })
    .catch((err) => {
      console.log(err);
    });
};

const blog_create = (req, res) => {
  res.render("create", { title: "Post Blog" });
};

const blog_post = (req, res) => {
  const post = new Post(req.body);
  post
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
};

const blog_delete = (req, res) => {
  const id = req.params.id;

  Post.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  blog_index,
  blog_detail,
  blog_post,
  blog_create,
  blog_delete,
};
