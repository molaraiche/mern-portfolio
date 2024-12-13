const Contact = require("../models/contact");
const { validationResult } = require("express-validator");

const getMails = async (req, res) => {
  try {
    const response = await Contact.find().exec();
    res.status(200).json({ message: "Mails", response });
  } catch (error) {
    res.status(500).json({
      message: "There is an error Mails fetching !",
      error: error.message,
    });
  }
};

const sendMail = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { name, email, message } = req.body;
    const sendMail = new Contact({
      name,
      email,
      message,
    });
    const mail = await sendMail.save();
    res.status(201).json({ message: "Email has been Sent !", mail });
  } catch (error) {
    res.status(500).json({
      message: "There is an error Mails Sending !",
      error: error.message,
    });
  }
};
const deleteMail = async (req, res) => {
  try {
    const deleteMail = await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Email has been deleted", deleteMail });
  } catch (error) {
    res.status(500).json({
      message: "There is an error Mails Deleting !",
      error: error.message,
    });
  }
};

module.exports = { getMails, sendMail, deleteMail };
