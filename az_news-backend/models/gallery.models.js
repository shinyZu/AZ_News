const mongoose = require("mongoose");
const validator = require("validator");

// Creating of a schema in "az_news" database
const gallerySchema = new mongoose.Schema({
  body: {
    type: String,
    required: true,
  },
});

// export gallerySchema as a model
module.exports = mongoose.model("Gallery", gallerySchema);
