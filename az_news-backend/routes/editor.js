const express = require("express");
const app = express();
const router = express.Router();
// app.use(express.json());

const Editor = require("../models/editor.models");

router.get("/", async (req, res) => {
  try {
    const editors = await Editor.find();
    res.json(editors);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/:id", async (req, res) => {
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

router.post("/", async (req, res) => {
  const body = req.body;
  const editor = new Editor({
    nic_no: body.nic_no,
    name: body.name,
    address: body.address,
    email: body.email,
    contact_no: body.contact_no,
  });

  editor.save((err, result) => {
    // if any error occured while saving
    if (err) {
      if (err.errors) {
        return res.status(500).send(err.message.split(":")[2]);
      }

      if (err.keyPattern.contact_no == 1) {
        return res.status(404).send("Duplicate Contact No!");
      } else if (err.keyPattern != null) {
        return res.status(404).send("An Editor with this Email already exist!");
      } else if (!result) {
        return res
          .status(404)
          .send("Couldn't save the Editor. Please Try Again!");
      } else if (result) {
        res.send(result);
      }
    }
    res.status(201).send("Editor Saved Succesfully!!!");
  });
});

router.put("/:id", async (req, res) => {
  const body = req.body;
  Editor.findById(req.params.id, (err, editor) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (!editor) {
      return res.status(404).send("No such Editor!");
    }
    editor.nic_no = body.nic_no;
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

router.delete("/:id", async (req, res) => {
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
