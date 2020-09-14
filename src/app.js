const express = require("express");
const app = express();

app.set("view engine", "pug");

app.get("/p1", (req, res) => {
  res.render("page1");
});

app.get("/p2", (req, res) => {
  res.render("page2");
});

app.get("/p3", (req, res) => {
  res.render("page3");
});

app.get("/p4", (req, res) => {
  res.render("page4");
});

app.get("/p5", (req, res) => {
  res.render("page5");
});

app.listen(3333, () => {
  console.log("3333 PORT WEB SERVER START");
});
