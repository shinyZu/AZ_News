const mongoose = require("mongoose");
const validator = require("validator");

// Creating of a schema in "az_news" database
const newsArticleSchema = new mongoose.Schema({
  headline: {
    type: String,
    required: true,
  },

  text_body: {
    type: String,
    required: true,
  },

  media_body: {
    type: String,
    required: true,
  },

  category_code: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    required: true,
  },

  editor_nic: {
    type: String,
    required: true,
  },
});

// export newsArticleSchema as a model
module.exports = mongoose.model("NewsArticle", newsArticleSchema);
