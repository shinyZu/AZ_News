const express = require("express");
const app = express();
const router = express.Router();
// app.use(express.json());

const Editor = require("../models/editor.models");
const Category = require("../models/category.models");
const News = require("../models/newsArticle.models");

router.get("/", async (req, res) => {
  try {
    const news = await News.find();
    res.json(news);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/:id", (req, res) => {
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

router.post("/", async (req, res) => {
  const body = req.body;
  const news = new News({
    headline: body.headline,
    body: body.body,
    code: body.code,
    date: body.date,
    nic_no: body.nic_no,
  });

  // Checks whether the Editor exist or not
  Editor.findById(body.nic_no, (err1, editor) => {
    if (err1) {
      return res.status(500).send(err1);
    }
    if (!editor) {
      return res.status(404).send("Editor doesn't exist!");
    }

    // Checks whether the Category exist or not
    Category.findById(body.code, (err2, category) => {
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
            return res.status(500).send(err3.message.split(":")[2]);
          }
        }
        res.status(201).send("News Published Successfully!!!");
      });
    });
  });
});

router.put("/:id", async (req, res) => {
  const body = req.body;

  Editor.findById(body.nic_no, (err1, editor) => {
    if (err1) {
      return res.status(500).send(err1);
    }
    if (!editor) {
      return res.status(404).send("Editor doesn't exist!");
    }

    Category.findById(body.code, (err1, category) => {
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
        resultNews.headline = body.headline;
        resultNews.body = body.body;
        resultNews.code = body.code;
        resultNews.date = body.date;
        resultNews.nic_no = body.nic_no;

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

router.delete("/:id", async (req, res) => {
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

module.exports = router;
