const express = require("express");
const app = express();
var cors = require("cors");
const router = express.Router();
// app.use(express.json());

const Editor = require("../models/editor.models");

router.get("/", cors(), async (req, res) => {
  try {
    const editors = await Editor.find();
    res.json(editors);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/:id", cors(), async (req, res) => {
  Editor.findById(req.params.id, (err, editor) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (!editor) {
      return res.status(404).send("Editor doesn't exist!");
    }
    res.json(editor);
  });
});

router.post("/", cors(), async (req, res) => {
  const body = req.body;
  const editor = new Editor({
    editor_nic: body.editor_nic,
    name: body.name,
    address: body.address,
    email: body.email,
    contact_no: body.contact_no,
  });

  editor.save((err, result) => {
    // if any error occured while saving
    if (err) {
      // console.log(err);
      // console.log(err.keyPattern.nic_no);
      if (err.errors) {
        return res.status(500).json({ message: err.message.split(":")[2] });
      }

      if (err.keyPattern.contact_no == 1) {
        return res.status(404).json({ message: "Duplicate Contact No!" });
      } else if (err.keyPattern.email == 1) {
        return res
          .status(404)
          .json({ message: "An Editor with this Email already exist!" });
      } else if (err.keyPattern.editor_nic == 1) {
        return res.status(404).json({ message: "Duplicate NIC No!" });
      } else if (!result) {
        return res
          .status(404)
          .json({ message: "Couldn't save the Editor. Please Try Again!" });
      } else if (result) {
        res.json(result);
      }
    }
    res.status(201).json({ message: "Editor Saved Succesfully!!!" });
  });
});

router.put("/:id", cors(), async (req, res) => {
  const body = req.body;
  Editor.findById(req.params.id, (err, editor) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (!editor) {
      return res.status(404).send("No such Editor!");
    }
    editor.editor_nic = body.editor_nic;
    editor.name = body.name;
    editor.address = body.address;
    editor.email = body.email;
    editor.contact_no = body.contact_no;

    editor.save((err2, result) => {
      if (err2) {
        return res.status(500).send(err2.message.split(":")[2]);
      }
      if (!result) {
        return res.status(404).send("No such Editor!");
      }
      res.status(200).send("Editor Updated Successfully!!!");
    });
  });
});

router.delete("/:id", cors(), async (req, res) => {
  Editor.findById(req.params.id, (err, editor) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (!editor) {
      return res.status(404).send("Editor doesn't exist!");
    }
    editor.remove((err2, result) => {
      if (err2) {
        return res.status(500).send(err2);
      }
      if (!result) {
        return res.status(404).send("Error while deleting Editor!");
      }
    });
    res.status(200).send("Editor Deleted Succesfully!!!");
  });
});

module.exports = router;

/* 
express. Router() 
    - used to create a new router object. 
    - used when want to create a new router object in the program to handle requests.

express.json()
    - a built-in middleware function in Express.
    - used to parse the incoming requests with JSON payloads
*/
