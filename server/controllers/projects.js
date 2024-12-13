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
      description,
      features,
      category,
      hot,
      path,
      live,
      source,
    } = req.body;
    let parsedFeatures = [];
    if (features) {
      parsedFeatures =
        typeof features === "string" ? JSON.parse(features) : features;
    }
    const thumbnail = req.files.thumbnail
      ? {
          url: req.files.thumbnail[0].path,
          public_id: req.files.thumbnail[0].filename,
        }
      : null;
    const logo = req.files.logo
      ? {
          url: req.files.logo[0].path,
          public_id: req.files.logo[0].filename,
        }
      : null;

    const tech = req.files.tech
      ? req.files.tech.map((file) => ({
          url: file.path,
          public_id: file.filename,
        }))
      : [];
    const newProject = new Projects({
      title,
      brief,
      description,
      features: parsedFeatures,
      category,
      thumbnail,
      tech,
      path,
      live,
      source,
      hot,
      logo,
    });
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
      description,
      features,
      category,
      path,
      live,
      source,
      hot,
    } = req.body;
    const thumbnail = req.files.thumbnail
      ? {
          url: req.files.thumbnail[0].path,
          public_id: req.files.thumbnail[0].filename,
        }
      : null;
    const logo = req.files.logo
      ? {
          url: req.files.logo[0].path,
          public_id: req.files.logo[0].filename,
        }
      : null;

    const tech = req.files.tech
      ? req.files.tech.map((file) => ({
          url: file.path,
          public_id: file.filename,
        }))
      : [];
    const id = req.params.id;
    const updatedProject = await Projects.findByIdAndUpdate(
      id,
      {
        title,
        brief,
        description,
        features,
        category,
        thumbnail,
        tech,
        path,
        live,
        source,
        hot,
        logo,
      },
      { new: true }
    );
    if (!updatedProject) {
      return res.status(404).json({ message: "Project not found" });
    }
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
    if (project.thumbnail) {
      imageDeletionPromises.push(
        cloudinary.uploader.destroy(project.thumbnail.public_id)
      );
    }
    if (project.logo) {
      imageDeletionPromises.push(
        cloudinary.uploader.destroy(project.logo.public_id)
      );
    }
    if (project.tech && project.tech.length > 0) {
      project.tech.forEach((file) => {
        imageDeletionPromises.push(cloudinary.uploader.destroy(file.public_id));
      });
    }
    await Promise.all(imageDeletionPromises);
    await project.deleteOne();
    res
      .status(200)
      .json({ message: "Project and associated images have been deleted" });
  } catch (error) {
    res.status(500).json({
      message: "There is an error in project deleting",
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
