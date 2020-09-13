const express = require("express");
const app = express();
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/node", (req, res) => {
  res.render("node");
});

app.listen(3333, () => {
  console.log("3333 PORT WEB SERVER START");
});
