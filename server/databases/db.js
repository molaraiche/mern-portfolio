const mongoose = require("mongoose");

// for your db link go to mongodb offocial page: https://www.mongodb.com/
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB has been Connected Successfully !");
  } catch (error) {
    console.log({ "MongoDb has an error": error.message });
  }
};
module.exports = connectDB;
