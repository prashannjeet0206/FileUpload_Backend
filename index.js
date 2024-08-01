const express = require("express");
const fileUpload = require("express-fileupload");
const app = express();

// PORT
require("dotenv").config();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(fileUpload());

// Route
const upload = require("./Routes/FileUpload.route");
app.use("/api/v1/upload", upload);

// Database
const DB = require("./Config/db");
DB();

// Cloud Connect
const Cloud = require("./Config/cloudinary");
Cloud();

//Server
app.listen(PORT, () => {
  console.log(`Listening to PORT:${PORT}`);
});
