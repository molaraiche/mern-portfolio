const Projects = require("../models/projects");
const { validationResult } = require("express-validator");
const cloudinary = require("cloudinary").v2;

const getProjects = async (req, res) => {
  try {
    const response = await Projects.find().exec();
    res.status(200).json({ Projects: response });
  } catch (error) {
    res.status(500).json({
      message: "There is an error in project fetching",
      error: error.message,
    });
  }
};

const getProjectByPath = async (req, res) => {
  try {
    const project = await Projects.findOne({ path: req.params.path });
    res.status(200).json({ message: "project is ready", project });
  } catch (error) {
    res.status(500).json({
      message: "There is an error in getting project by id",
      error: error.message,
    });
  }
};
const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ message: "Invalid project ID format" });
    }
    const project = await Projects.findById(id);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.status(200).json({ message: "Project is ready", project });
  } catch (error) {
    console.error("Error fetching project by ID:", error);
    res.status(500).json({
      message: "There is an error in getting project by ID",
      error: error.message,
    });
  }
};

const createProject = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const {
      title,
      brief,
      process,
      solution,
      stack,
      category,
      hot,
      path,
      live,
      source,
      date,
    } = req.body;
    const thumbnail = req.files.thumbnail
      ? {
          url: req.files.thumbnail[0].path,
          public_id: req.files.thumbnail[0].filename,
        }
      : null;

    const newProject = new Projects({
      title,
      brief,
      process,
      solution,
      stack,
      category,
      thumbnail,
      path,
      live,
      source,
      hot,
      date,
    });
    console.log(thumbnail);
    const project = await newProject.save();
    res.status(201).json({ message: "Project has been added", project });
  } catch (error) {
    res.status(500).json({
      message: "There is an error in project creation",
      error: error.message,
    });
  }
};

const updateProject = async (req, res) => {
  try {
    const {
      title,
      brief,
      process,
      solution,
      stack,
      category,
      hot,
      path,
      live,
      source,
      date,
    } = req.body;

    // Prepare the new thumbnail if uploaded
    const newThumbnail = req.files?.thumbnail
      ? {
          url: req.files.thumbnail[0].path,
          public_id: req.files.thumbnail[0].filename,
        }
      : null;

    const id = req.params.id;
    const project = await Projects.findById(id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    // Delete the old thumbnail from Cloudinary if a new one is uploaded
    if (newThumbnail && project.thumbnail?.public_id) {
      await cloudinary.uploader.destroy(project.thumbnail.public_id);
    }
    const updatedProject = await Projects.findByIdAndUpdate(
      id,
      {
        title,
        brief,
        process,
        solution,
        stack,
        category,
        thumbnail: newThumbnail || project.thumbnail,
        path,
        live,
        source,
        hot,
        date,
      },
      { new: true }
    );

    res
      .status(200)
      .json({ message: "The project has been updated", updatedProject });
  } catch (error) {
    res.status(500).json({
      message: "There is an error in project updating",
      error: error.message,
    });
  }
};

const deleteProject = async (req, res) => {
  try {
    const project = await Projects.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    const imageDeletionPromises = [];
    if (project.thumbnail && project.thumbnail.public_id) {
      imageDeletionPromises.push(
        cloudinary.uploader.destroy(project.thumbnail.public_id)
      );
    }

    if (project.additionalImages && Array.isArray(project.additionalImages)) {
      project.additionalImages.forEach((image) => {
        if (image.public_id) {
          imageDeletionPromises.push(
            cloudinary.uploader.destroy(image.public_id)
          );
        }
      });
    }

    await Promise.all(imageDeletionPromises);

    await project.deleteOne();

    res
      .status(200)
      .json({ message: "Project and associated images have been deleted" });
  } catch (error) {
    res.status(500).json({
      message: "There was an error deleting the project",
      error: error.message,
    });
  }
};

module.exports = {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
  getProjectById,
  getProjectByPath,
};
