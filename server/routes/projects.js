const router = require("express").Router();
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
  [upload.fields([{ name: "thumbnail", maxCount: 1 }])],
  createProject
);

router.put(
  "/:id",
  [upload.fields([{ name: "thumbnail", maxCount: 1 }])],
  updateProject
);

router.delete("/:id", deleteProject);

module.exports = router;
