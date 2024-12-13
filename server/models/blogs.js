const mongoose = require("mongoose");

const blogsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  brief: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  thumbnail: {
    url: { type: String, required: true },
    public_id: { type: String, required: true },
  },
  main: {
    url: { type: String, required: true },
    public_id: { type: String, required: true },
  },
  path: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("Blogs", blogsSchema);
