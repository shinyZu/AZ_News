const express = require("express");
const multer = require("multer");
const app = express();

// Uploading files to disk storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const filename = `${Date.now()}-${file.originalname}`; // 1663835306137-cover.jpg
    cb(null, filename);
  },
});

// Set disk storage engine to the newly created object
const upload = multer({ storage: storage });
module.exports = upload;
