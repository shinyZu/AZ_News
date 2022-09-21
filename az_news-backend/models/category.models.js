const mongoose = require("mongoose");
const validator = require("validator");

// Creating of a schema in "az_news" database
const categorySchema = new mongoose.Schema({
  category_code: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
});

// export categorySchema as a model
module.exports = mongoose.model("Category", categorySchema);
