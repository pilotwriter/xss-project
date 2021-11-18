const express = require("express");
const app = express();
const port = 8000;
var cors = require("cors");
app.use(cors());
app.use(express.json()); //declare this to receive json objects.

app.post("/", (req, res) => {
  res.set("Content-Type", "text/html");
  res.send(`<h2>${req.body.text}</h2>`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
