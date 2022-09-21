const express = require("express");
const app = express();
const router = express.Router();
// app.use(express.json());

const Category = require("../models/category.models");

router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/:id", (req, res) => {
  Category.findById(req.params.id, (err, category) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (!category) {
      return res.status(404).send("Category doesn't exist!");
    }
    res.json(category);
  });
});

router.post("/", async (req, res) => {
  const body = req.body;
  const category = new Category({
    code: body.code,
    category: body.category,
    description: body.description,
  });

  category.save((err, result) => {
    // if any error occured while saving
    if (err) {
      if (err.errors) {
        return res.status(500).send(err.message.split(":")[2]);
      }

      if (err.keyPattern.category_code == 1) {
        return res.status(404).send("Duplicate Category Code!");
      } else if (err.keyPattern != null) {
        return res.status(404).send("A Category already exist!");
      } else if (!result) {
        return res
          .status(404)
          .send("Couldn't save the Category. Please Try Again!");
      } else if (result) {
        res.send(result);
      }
    }
    res.status(201).send("Category Saved Succesfully!!!");
  });
});

router.put("/:id", async (req, res) => {
  const body = req.body;
  Category.findById(req.params.id, (err, category) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (!category) {
      return res.status(404).send("No such category!");
    }
    category.code = body.code;
    category.category = body.category;
    category.description = body.description;

    category.save((err2, result) => {
      if (err2) {
        return res.status(500).send(err2.message.split(":")[2]);
      }
      if (!result) {
        return res.status(404).send("No such Category!");
      }
      res.status(200).send("Category Updated Successfully!!!");
    });
  });
});

router.delete("/:id", async (req, res) => {
  Category.findById(req.params.id, (err, category) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (!category) {
      return res.status(404).send("Category doesn't exist!");
    }
    category.remove((err2, result) => {
      if (err2) {
        return res.status(500).send(err2);
      }
      if (!result) {
        return res.status(404).send("Error while deleting Category!");
      }
    });
    res.status(200).send("Category Deleted Succesfully!!!");
  });
});

module.exports = router;
