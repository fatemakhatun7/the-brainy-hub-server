const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.Port || 5000;
const categories = require('./data/categories.json');

app.get('/', (req, res) => {
  res.send(categories)
});

app.listen(Port, () => {
  console.log("server is running", Port);
});