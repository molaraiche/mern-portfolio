const router = require("express").Router();
const { check } = require("express-validator");
const upload = require("../utils/image-uploader");
const {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
  getProjectByPath,
  getProjectById,
} = require("../controllers/projects");

router.get("/allProjects", getProjects);
router.get("/path/:path", getProjectByPath);
router.get("/id/:id", getProjectById);
router.post(
  "/addProject",
  [
    upload.fields([
      { name: "thumbnail", maxCount: 1 },
      { name: "logo", maxCount: 1 },
      { name: "tech", maxCount: 50 },
    ]),
    check("title").notEmpty().withMessage("Title is required"),
    check("brief").notEmpty().withMessage("Brief is required"),
    check("description").notEmpty().withMessage("Description is required"),
    check("category").notEmpty().withMessage("Category is required"),
    check("path").notEmpty().withMessage("Path is required"),
    check("live").notEmpty().withMessage("Live is required"),
    check("source").notEmpty().withMessage("Source is required"),
    check("hot")
      .exists()
      .withMessage("Hot is required")
      .isBoolean()
      .withMessage("Hot must be a boolean value"),
  ],
  createProject
);

router.put(
  "/:id",
  [
    upload.fields([
      { name: "thumbnail", maxCount: 1 },
      { name: "logo", maxCount: 1 },
      { name: "tech", maxCount: 50 },
    ]),
    check("title").optional().notEmpty().withMessage("Title cannot be empty"),
    check("brief").optional().notEmpty().withMessage("Brief cannot be empty"),
    check("category").notEmpty().withMessage("Category is required"),
    check("path").notEmpty().withMessage("Path is required"),
    check("live").notEmpty().withMessage("Live is required"),
    check("source").notEmpty().withMessage("Source is required"),
    check("description").notEmpty().withMessage("Description is required"),
    check("hot")
      .exists()
      .withMessage("Hot is required")
      .isBoolean()
      .withMessage("Hot must be a boolean value"),
  ],
  updateProject
);

router.delete("/:id", deleteProject);

module.exports = router;
