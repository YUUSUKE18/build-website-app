const mongoose = require("mongoose");

const schema = mongoose.Schema;

const blogSchema = new schema(
  {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("posts", blogSchema);

module.exports = Post;
