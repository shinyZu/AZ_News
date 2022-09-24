require("dotenv").config();

const express = require("express");
const cors = require("cors"); // to handle CORS issue
const app = express(); // to start a new Express application
app.use(cors());

app.use(express.json());
const { connection } = require("./db.configs/db");

connection.establishConnection; // invoke the method to establish connection with mongoDB

const baseURL = "/az_news/api/v1/";

const editor = require("./routes/editor");
const category = require("./routes/category");
const news = require("./routes/news");
const gallery = require("./routes/gallery");

app.use(`${baseURL}editor`, editor);
app.use(`${baseURL}category`, category);
app.use(`${baseURL}news`, news);
app.use(`${baseURL}gallery`, gallery);

app.get(`${baseURL}/`, (req, res) => {
  console.log(req);
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
  - a zero-dependency module that loads environment variables from a .env file into process.env.
*/
