const mongoose = require("mongoose");
const validator = require("validator");

// Creating of a schema in "az_news" database
const newsArticleSchema = new mongoose.Schema({
  headline: {
    type: String,
    required: true,
  },

  body: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    required: true,
  },

  editor_id: {
    type: String,
    required: true,
  },
});

// export newsArticleSchema as a model
module.exports = mongoose.model("Editor", newsArticleSchema);
