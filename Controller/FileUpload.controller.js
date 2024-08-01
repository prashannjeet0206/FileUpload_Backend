const FileModel = require("../Models/fileUpload.model");

// Saving file to local server
const LocalUpload = async (req, res) => {
  try {
    // get file from the client req
    const file = req.files.file;
    console.log(file);
    //   set path to save the file
    const path =
      __dirname + "/files" + Date.now() + `.${file.name.split(".")[1]}`;

    //   save the file to set path in local server
    file.mv(path, (error) => {
      console.log(error);
      res.json({
        success: true,
        message: "File uploaded to local server",
      });
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { LocalUpload };
