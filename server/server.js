const express = require("express");
const cors = require("cors");
const connectDB = require("./databases/db");
require("dotenv");

connectDB();

const projectsRouter = require("./routes/projects");
const blogsRouter = require("./routes/blogs");
const adminRouter = require("./routes/admin");
const contactRouter = require("./routes/contact");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/projects", projectsRouter);
app.use("/api/blogs", blogsRouter);
app.use("/api/admin", adminRouter);
app.use("/api/contact", contactRouter);

const PORT = 5000;

app.listen(PORT, console.log("Server is up and running"));
