const mongoose = require("mongoose");
const validator = require("validator");

// Creating of a schema in "az_news" database
const categorySchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (val) {
        return /(CTG-000)[0-9]/.test(val);
      },
      message: (val) => "Invalid Category Code!",
    },
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
