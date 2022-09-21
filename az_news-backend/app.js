require("dotenv").config();
const express = require("express");
const app = express(); // to start a new Express application
// app.use(express.json());
const { connection } = require("./db.configs/db");

// invoke the method to establish connection with mongoDB
connection.establishConnection;

const editor = require("./routes/editor");
// const category = require("./routes/category");
// const news = require("./routes/news");

app.use("/editor", editor);
// app.use("/category", category);
// app.use("/news", news);

app.get("/", (req, res) => {
  res.send("<h1>Hello Express!!!</h1>");
});

app.listen(process.env.PORT, (req, res) => {
  console.log(`express app listening on Port ${process.env.PORT}`);
});

/*
 .env
  - file to store your sensitive credentials like API keys, Secret jeys. 
  
  dotenv 
  - a lightweight npm package that automatically loads environment variables from a ".env" file into the process. 
*/
