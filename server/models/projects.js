const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
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
  features: {
    type: [String],
  },
  category: {
    type: String,
    required: true,
  },
  thumbnail: {
    url: { type: String, required: true },
    public_id: { type: String, required: true },
  },

  tech: [
    {
      url: { type: String, required: true },
      public_id: { type: String, required: true },
    },
  ],
  path: {
    type: String,
    required: true,
    unique: true,
  },
  live: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  hot: {
    type: Boolean,
    required: true,
  },
  logo: {
    url: { type: String, required: true },
    public_id: { type: String, required: true },
  },
});

module.exports = mongoose.model("Projects", projectSchema);
