const express = require("express");
const blogRouter = express.Router();

const {
  fetchListOfBlogs,
  addNewBlog,
  updateABlog,
  deleteABlog,
} = require("../contoller/blog-controller");

blogRouter.get("/", fetchListOfBlogs);
blogRouter.post("/add", addNewBlog);
blogRouter.put("/update/:id", updateABlog);
blogRouter.delete("/delete/:id", deleteABlog);

module.exports = blogRouter; 