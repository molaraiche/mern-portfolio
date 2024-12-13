const router = require("express").Router();
const { check } = require("express-validator");
const { getMails, sendMail, deleteMail } = require("../controllers/contact");

router.get("/allMails", getMails);
router.post(
  "/send",
  [
    check("name").notEmpty().withMessage("Name is required"),
    check("email").notEmpty().withMessage("Email is required"),
    check("message").notEmpty().withMessage("Message is required"),
  ],
  sendMail
);
router.delete("/:id", deleteMail);

module.exports = router;
