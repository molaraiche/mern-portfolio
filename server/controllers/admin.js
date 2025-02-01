const Admin = require("../models/admin");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// for JWT secret https://jwtsecret.com/generate

const CreateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({
      message: "please fill all the fields with the correct Data !",
    });
  }
  try {
    if (!validator.isEmail(email) || !validator.isStrongPassword(password)) {
      res.status(400).json({ message: "Please add correct format !" });
    } else {
      const existUser = await Admin.findOne({ email });
      if (existUser) {
        const matchedPassword = bcrypt.compareSync(
          password,
          existUser.password
        );
        if (matchedPassword) {
          const token = CreateToken(existUser._id);

          res.status(200).json({ message: "Login !!", token });
        } else {
          res.json({
            message:
              "user Does not exist or password is incorrect ! Please try check your credential informations! ",
          });
        }
      } else {
        res.json({
          message:
            "user Does not exist or password is incorrect ! Please try check your credential informati",
        });
      }
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

module.exports = { login };
