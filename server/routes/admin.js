const router = require("express").Router();
const { login } = require("../controllers/admin");
router.post("/login", login);

module.exports = router;
