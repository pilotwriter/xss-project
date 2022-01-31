const express = require("express");
const app = express();
const PORT = 3001;
const models = require("./models/index");
var cors = require("cors");
app.use(cors());
app.use(express.json());

const IS_PROTECTED = true;
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/inputs", async (req, res) => {
  try {
    const inputs = await models.example.findAll();
    res.send(inputs);
  } catch (err) {
    console.log("Error: " + err);
  }
});

app.post("/inputs", async (req, res) => {
  const input = req.body.input;
  const imgUrl = req.body.imgUrl;
  if (!input || !imgUrl) {
    return res.sendStatus(400);
  }
  const payload = {
    input: filterInput(input),
    imageUrl: filterInput(imgUrl),
  };
  await models.example.create(payload);
  res.sendStatus(200);
});

app.listen(PORT, async () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

// this is simple self written filtering method. Complexer one could be found in xss package
function filterInput(input) {
  if (IS_PROTECTED) {
    return input
      .replace(/\&/g, "&amp;")
      .replace(/\</g, "&lt;")
      .replace(/\>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/\'/g, "&#x27;");
  }
  return input;
}
