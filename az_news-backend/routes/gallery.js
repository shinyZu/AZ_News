require("dotenv").config();
const express = require("express");
const app = express();
const router = express.Router();
// app.use(express.json());

const Grid = require("gridfs-stream");
const mongoose = require("mongoose");

const Gallery = require("../models/gallery.models");

const upload = require("../middleware/upload");
const { conn } = require("../db.configs/db");

let gfs, gridfsBucket;

conn.once("open", () => {
  gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "assets",
  });
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("assets");
});

router.get("/", async (req, res) => {
  try {
    const gallery = await Gallery.find();
    res.json(gallery);
  } catch (error) {
    res.status(500).send(error);
  }
});

// To recieve Gallery images
router.get("/file/:filename", async (req, res) => {
  // console.log(gfs.files);
  // console.log(req.params.filename); // 1663839024551-cover.jpg

  gfs.files.findOne({ filename: req.params.filename }, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (!result) {
      return res.status(404).send("File Not Found");
    }
    // const readStream = gfs.createReadStream(result.filename);
    // const readStream = gfs.openDownloadStream(result.filename);
    const readStream = gridfsBucket.openDownloadStreamByName(result.filename);
    readStream.pipe(res);
  });
});

// To save images to Gallery
router.post("/", upload.single("body"), async (req, res) => {
  const body = req.body;
  console.log(req.file);
  console.log(body);

  let gallery;

  if (req.file) {
    const imgUrl = `http://localhost:4080/file/${req.file.filename}`;
    gallery = new Gallery({
      body: imgUrl,
    });
  } else {
    gallery = new Gallery({
      body: "null",
    });
  }

  gallery.save((err, result) => {
    if (err) {
      if (err.errors) {
        // return res.status(500).send(err.message.split(":")[2]);
        return res.status(500).send(err.message);
      }
    }
    res.status(201).send("Image added to Gallery!!!");
  });
});

router.delete("/:id", async (req, res) => {
  Gallery.findById(req.params.id, (err, news) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (!news) {
      return res.status(404).send("Image doesn't exist!");
    }
    news.remove((err2, result) => {
      if (err2) {
        return res.status(500).send(err2);
      }
      if (!result) {
        return res.status(404).send("Error while deleting Image!");
      }
    });
    res.status(200).send("Image Deleted Succesfully!!!");
  });
});

// To delete images from Gallery
router.delete("/file/:filename", (req, res) => {
  gfs.files.deleteOne({ filename: req.params.filename }, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (result.deletedCount === 0) {
      return res.status(404).send("File Not Found");
    }
    return res.status(200).send("Image Deleted Successfully!");
  });
});

module.exports = router;
