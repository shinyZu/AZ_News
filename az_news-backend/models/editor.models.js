const mongoose = require("mongoose");
const validator = require("validator");

// Creating of a schema in "az_news" database
const editorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (val) {
        return /[A-z|0-9]{4,}@(gmail)(.com|.lk)/.test(val);
      },
      message: (val) => "Invalid Email!",
    },
  },

  contact_no: {
    type: Number,
    required: true,
    unique: true,
    validate: {
      validator: function (val) {
        return val.toString().length === 9;
      },
      message: "Invalid Phone No!",
    },
  },
});

// export editorSchema as a model
module.exports = mongoose.model("Editor", editorSchema);
