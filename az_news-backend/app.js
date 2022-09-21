require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const { connection } = require("./db.configs/db");

// invoke the method to establish connection with mongoDB
connection.establishConnection;

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
