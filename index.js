const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.Port || 5000;
const categories = require('./data/categories.json');
const digitalMarketing = require('./data/digitalMarketing.json');
const freeCourses = require('./data/freeCourses.json');
const ielts = require('./data/IELTS.json');
const languageCourses = require('./data/languageCourses.json');
const mostPopularCourses = require('./data/mostPopularCourses.json');
const programmingCourses = require('./data/ProgrammingCourses.json');
const psychologicalCourses = require('./data/psychologicalCourses.json');
const skillDevelopment = require('./data/skillDevelopment.json');

app.get('/', (req, res) => {
  res.send(categories)
});
app.get('/courseCategory', (req, res) => {
  res.send(categories)
});

app.get('/digitalMarketing', (req, res) => {
  res.send(digitalMarketing)
});

app.get('/freeCourses', (req, res) => {
  res.send(freeCourses)
});

app.get('/ielts', (req, res) => {
  res.send(ielts)
});

app.get('/languageCourses', (req, res) => {
  res.send(languageCourses)
});

app.get('/mostPopularCourses', (req, res) => {
  res.send(mostPopularCourses)
});

app.get('/programmingCourses', (req, res) => {
  res.send(programmingCourses)
});

app.get('/psychologicalCourses', (req, res) => {
  res.send(psychologicalCourses)
});

app.get('/skillDevelopment', (req, res) => {
  res.send(skillDevelopment)
});

app.listen(Port, () => {
  console.log("server is running", Port);
});