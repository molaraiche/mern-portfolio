const router = require("express").Router();
const upload = require("../utils/image-uploader");
const { check } = require("express-validator");

const {
  getBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
  getBlogByPath,
} = require("../controllers/blogs");
router.get("/allBlogs", getBlogs);
router.get("/:path", getBlogByPath);

router.post(
  "/addBlog",
  [
    upload.fields([
      { name: "thumbnail", maxCount: 1 },
      { name: "main", maxCount: 1 },
    ]),
    check("title").notEmpty().withMessage("Title is required"),
    check("description").notEmpty().withMessage("Description is required"),
    check("brief").notEmpty().withMessage("Brief is required"),
    check("path").notEmpty().withMessage("Path is super required"),
  ],
  createBlog
);
router.put(
  "/:id",
  [
    upload.fields([
      { name: "thumbnail", maxCount: 1 },
      { name: "main", maxCount: 1 },
    ]),
    check("title").optional().notEmpty().withMessage("Title cannot be empty"),
    check("path").notEmpty().withMessage("Path is super required"),
    check("brief").notEmpty().withMessage("Brief is super required"),
    check("description")
      .optional()
      .notEmpty()
      .withMessage("Description cannot be empty"),
  ],
  updateBlog
);
router.delete("/:id", deleteBlog);

module.exports = router;
