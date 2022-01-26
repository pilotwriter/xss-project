const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/index1", (req, res) => {
  res.render("index");
});

app.get("/index2", (req, res) => {
  console.log(req);
  res.render("index2");
});

app.get("/index2Secure", (req, res) => {
  res.render("index2Secure");
});

app.get("/index3", (req, res) => {
  res.render("index3");
});

app.get("/index4", (req, res) => {
  res.render("index4");
});

app.listen(port, () => {
  console.log(`Server running on ${port} port...`);
});
