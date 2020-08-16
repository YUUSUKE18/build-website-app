const express = require("express");
const blogController = require("../controller/blogController");
const router = express.Router();

router.get("/create", blogController.blog_create);
router.get("/", blogController.blog_index);
router.post("/", blogController.blog_post);
router.get("/:id", blogController.blog_detail);
router.delete("/:id", blogController.blog_delete);

module.exports = router;
