const mongoose = require("mongoose");
const validator = require("validator");

// Creating of a schema in "az_news" database
const categorySchema = new mongoose.Schema({
  category_code: {
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

/* 
Mongoose model 
  - is a wrapper on the Mongoose schema.
  - provides an interface to the database for creating, querying, updating, deleting records, etc.
Mongoose schema
  - defines the structure of the document, default values, validators, etc., 
*/
