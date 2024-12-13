const Blogs = require("../models/blogs");
const { validationResult } = require("express-validator");
const cloudinary = require("cloudinary").v2;
const getBlogs = async (req, res) => {
  try {
    const response = await Blogs.find().exec();
    res.status(200).json({ Blogs: response });
  } catch (error) {
    res.status(500).json({
      message: "There is an error in Blogs fetching",
      error: error.message,
    });
  }
};
const getBlogByPath = async (req, res) => {
  try {
    const blog = await Blogs.findOne({ path: req.params.path });
    res.status(200).json({ message: "Blog is ready", blog });
  } catch (error) {
    res.status(500).json({
      message: "There is an error in getting Blog by id",
      error: error.message,
    });
  }
};
const createBlog = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { title, brief, description, category, path } = req.body;
    const thumbnail = req.files.thumbnail
      ? {
          url: req.files.thumbnail[0].path,
          public_id: req.files.thumbnail[0].filename,
        }
      : null;
    const main = req.files.main
      ? { url: req.files.main[0].path, public_id: req.files.main[0].filename }
      : null;

    const newBlog = new Blogs({
      title,
      description,
      category,
      thumbnail,
      main,
      path,
      brief,
    });
    const blog = await newBlog.save();
    res.status(201).json({ message: "Blog has been added", blog });
  } catch (error) {
    res.status(500).json({
      message: "There is an error in Blog creation",
      error: error.message,
    });
  }
};
const updateBlog = async (req, res) => {
  try {
    const { title, brief, description, category, path } = req.body;
    const thumbnail = req.files.thumbnail
      ? {
          url: req.files.thumbnail[0].path,
          public_id: req.files.thumbnail[0].filename,
        }
      : null;
    const main = req.files.main
      ? { url: req.files.main[0].path, public_id: req.files.main[0].filename }
      : null;
    const id = req.params.id;
    const updatedBlog = await Blogs.findByIdAndUpdate(
      id,
      {
        title,
        description,
        category,
        thumbnail,
        main,
        path,
        brief,
      },
      { new: true }
    );
    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json({ message: "The Blog has been updated", updatedBlog });
  } catch (error) {
    res.status(500).json({
      message: "There is an error in project updating",
      error: error.message,
    });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blog = await Blogs.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    const imageDeletionPromises = [];
    if (blog.thumbnail) {
      imageDeletionPromises.push(
        cloudinary.uploader.destroy(blog.thumbnail.public_id)
      );
    }
    if (blog.main) {
      imageDeletionPromises.push(
        cloudinary.uploader.destroy(blog.main.public_id)
      );
    }

    await Promise.all(imageDeletionPromises);
    await blog.deleteOne();
    res
      .status(200)
      .json({ message: "Blog and associated images have been deleted" });
  } catch (error) {
    res.status(500).json({
      message: "There is an error in blog deleting",
      error: error.message,
    });
  }
};

module.exports = {
  getBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
  getBlogByPath,
};
