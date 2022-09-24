require("dotenv").config();
const express = require("express");
const app = express();
var cors = require("cors");
const router = express.Router();
// app.use(express.json());

const Grid = require("gridfs-stream");
const mongoose = require("mongoose");

// const upload = require("../middleware/upload1");
const upload = require("../middleware/upload");
const { conn } = require("../db.configs/db");

const Editor = require("../models/editor.models");
const Category = require("../models/category.models");
const News = require("../models/newsArticle.models");

let gfs, gridfsBucket;

conn.once("open", () => {
  gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "assets",
  });
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("assets");
});

router.get("/", cors(), async (req, res) => {
  try {
    const news = await News.find();
    res.json(news);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/:id", cors(), (req, res) => {
  News.findById(req.params.id, (err, news) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (!news) {
      return res.status(404).send("News doesn't exist!");
    }
    res.json(news);
    // return res.status(200).send(news);
  });
});

// To recieve uploaded files(images/videos)
router.get("/file/:filename", cors(), async (req, res) => {
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

// To publish a new News
router.post("/", cors(), upload.single("media_body"), async (req, res) => {
  const body = req.body;
  // console.log(req.file);
  console.log(body);

  let news;

  if (req.file) {
    const imgUrl = `http://localhost:4080/file/${req.file.filename}`;
    news = new News({
      headline: body.headline,
      text_body: body.text_body,
      media_body: imgUrl,
      category: body.category,
      date: body.date,
      editor: body.editor,
    });
  } else {
    news = new News({
      headline: body.headline,
      text_body: body.text_body,
      media_body: "null",
      category: body.category,
      date: body.date,
      editor: body.editor,
    });
  }

  // Checks whether the Editor exist or not
  Editor.findById(body.editor, (err1, editor) => {
    if (err1) {
      return res.status(500).send(err1);
    }
    if (!editor) {
      return res.status(404).send("Editor doesn't exist!");
    }

    // Checks whether the Category exist or not
    Category.findById(body.category, (err2, category) => {
      if (err2) {
        return res.status(500).send(err2);
      }
      if (!category) {
        return res.status(404).send("Category doesn't exist!");
      }

      // If only both Editor & Category exist the News will be eligible to publish
      news.save((err3, result) => {
        if (err3) {
          if (err3.errors) {
            // return res.status(500).send(err3.message.split(":")[2]);
            return res.status(500).send(err3.message);
          }
        }
        res.status(201).send("News Published Successfully!!!");
      });
    });
  });
});

router.put("/:id", cors(), upload.single("media_body"), async (req, res) => {
  const body = req.body;
  // console.log(body);
  // console.log(req.file);

  News.findById(req.params.id, (err2, resultNews) => {
    if (err2) {
      return res.status(500).send(err2);
    }
    if (!resultNews) {
      return res.status(404).send("No such News!");
    }

    Editor.findById(body.editor, (err1, editor) => {
      if (err1) {
        return res.status(500).send(err1);
      }
      if (!editor) {
        return res.status(404).send("Editor doesn't exist!");
      }

      Category.findById(body.category, (err1, category) => {
        if (err1) {
          return res.status(500).send(err1);
        }
        if (!category) {
          return res.status(404).send("Category doesn't exist!");
        }

        if (req.file) {
          const imgUrl = `http://localhost:4080/file/${req.file.filename}`;
          resultNews.headline = body.headline;
          resultNews.text_body = body.text_body;
          resultNews.media_body = imgUrl;
          resultNews.category = body.category;
          resultNews.date = body.date;
          resultNews.editor = body.editor;
        } else {
          resultNews.headline = body.headline;
          resultNews.text_body = body.text_body;
          resultNews.media_body = "null";
          resultNews.category = body.category;
          resultNews.date = body.date;
          resultNews.editor = body.editor;
        }

        resultNews.save((err3, result) => {
          if (err3) {
            return res.status(500).send(err3.message.split(":")[2]);
          }
          if (!result) {
            return res.status(404).send("No such News!");
          }
          res.status(200).send("News Updated Successfully!!!");
        });
      });
    });
  });
});

// To delete published News
router.delete("/:id", cors(), async (req, res) => {
  News.findById(req.params.id, (err, news) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (!news) {
      return res.status(404).send("News doesn't exist!");
    }
    news.remove((err2, result) => {
      if (err2) {
        return res.status(500).send(err2);
      }
      if (!result) {
        return res.status(404).send("Error while deleting News!");
      }
    });
    res.status(200).send("News Deleted Succesfully!!!");
  });
});

// To delete uploaded files(images/videos)
router.delete("/file/:filename", cors(), (req, res) => {
  gfs.files.deleteOne({ filename: req.params.filename }, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (result.deletedCount === 0) {
      return res.status(404).send("File Not Found");
    }
    return res.status(200).send("File Deleted Successfully!");
  });
});

module.exports = router;

/* 
  Editor.findById(body.editor, (err1, editor) => {
    if (err1) {
      return res.status(500).send(err1);
    }
    if (!editor) {
      return res.status(404).send("Editor doesn't exist!");
    }
    Category.findById(body.category, (err1, category) => {
      if (err1) {
        return res.status(500).send(err1);
      }
      if (!category) {
        return res.status(404).send("Category doesn't exist!");
      }

      News.findById(req.params.id, (err2, resultNews) => {
        if (err2) {
          return res.status(500).send(err2);
        }
        if (!resultNews) {
          return res.status(404).send("No such News!");
        }

        if (req.file) {
          const imgUrl = `http://localhost:4080/file/${req.file.filename}`;
          resultNews.headline = body.headline;
          resultNews.text_body = body.text_body;
          resultNews.media_body = imgUrl;
          resultNews.category = body.category;
          resultNews.date = body.date;
          resultNews.editor = body.editor;
        }

        resultNews.save((err3, result) => {
          if (err3) {
            return res.status(500).send(err3.message.split(":")[2]);
          }
          if (!result) {
            return res.status(404).send("No such News!");
          }
          res.status(200).send("News Updated Successfully!!!");
        });
      });
    });
  });
*/

/* 

News.findById(req.params.id, (err2, resultNews) => {
    if (err2) {
      return res.status(500).send(err2);
    }
    if (!resultNews) {
      return res.status(404).send("No such News!");
    }

    Editor.findById(body.editor, (err1, editor) => {
      if (err1) {
        return res.status(500).send(err1);
      }
      if (!editor) {
        return res.status(404).send("Editor doesn't exist!");
      }

      Category.findById(body.category, (err1, category) => {
        if (err1) {
          return res.status(500).send(err1);
        }
        if (!category) {
          return res.status(404).send("Category doesn't exist!");
        }
        resultNews.headline = body.headline;
        resultNews.text_body = body.text_body;
        resultNews.media_body = body.media_body;
        resultNews.category = body.category;
        resultNews.date = body.date;
        resultNews.editor = body.editor;

        resultNews.save((err3, result) => {
          if (err3) {
            return res.status(500).send(err3.message.split(":")[2]);
          }
          if (!result) {
            return res.status(404).send("No such News!");
          }
          res.status(200).send("News Updated Successfully!!!");
        });
      });
    });
  });
*/

/* 

{
    "headline": "Headline 1",
    "text_body": "Body 1",
    "media_body": null,
    "category": "632c330345b7e97aed74fe44",
    "date": "2022-09-22",
    "editor": "632c398cedb282d121416e74"
}
*/
