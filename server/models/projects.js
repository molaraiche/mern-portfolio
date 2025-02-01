const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  brief: {
    type: String,
  },
  process: {
    type: String,
  },
  solution: {
    type: String,
  },
  stack: {
    type: String,
  },
  category: {
    type: String,
  },
  thumbnail: {
    url: { type: String, required: true },
    public_id: { type: String, required: true },
  },
  path: {
    type: String,
    unique: true,
  },
  live: {
    type: String,
  },
  source: {
    type: String,
  },
  hot: {
    type: Boolean,
  },
  date: {
    type: Date,
  },
});

module.exports = mongoose.model("Projects", projectSchema);
