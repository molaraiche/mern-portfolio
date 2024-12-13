const mongoose = require("mongoose");

// you can set your MongoDB from https://www.mongodb.com/
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB has been Connected Successfully !");
  } catch (error) {
    console.log({ "MongoDb has an error": error.message });
  }
};
module.exports = connectDB;
