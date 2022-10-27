const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.Port || 5000;
const categories = require('./data/categories.json');
const courses = require('./data/courses.json');

app.get('/', (req, res) => {
  res.send(categories)
});

app.get('/courses', (req, res) =>{
  res.send(courses);
});

app.get('/courses/:id', (req, res) => {
  const id = req.params.id;
  const selectedCourses = courses.find(c => c.course_id === id);
  res.send(selectedCourses);
});

app.listen(Port, () => {
  console.log("server is running", Port);
});