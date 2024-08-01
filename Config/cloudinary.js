const cloudinary = require("cloudinary").v2;
require("dotenv").config();

const CloudConnect = async () => {
  try {
    cloudinary.config({
      cloud_name: process.env.Cloud_Name,
      api_key: process.env.Api_Key,
      api_secret: process.env.API_Secret,
    });
  } catch (error) {
    console.log("Cloudinary connection failed");
    console.error(error);
    process.exit(1);
  }
};

module.exports = CloudConnect;
