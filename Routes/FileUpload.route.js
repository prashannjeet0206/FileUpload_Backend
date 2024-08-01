const express = require("express");
const { LocalUpload } = require("../Controller/FileUpload.controller");
const router = express.Router();

router.post("/uploadLocal", LocalUpload);

module.exports = router;
