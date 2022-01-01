const express = require("express");
const app = express();
const port = 3001;
const models = require("./models/index");
var cors = require("cors");
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/inputs", async (req, res) => {
  const inputs = await models.example.findAll();
  res.send(inputs);
});

app.post("/inputs", async (req, res) => {
  const input = req.body.input;
  const imgUrl = req.body.imgUrl;
  console.log(req.body);
  if (!input || !imgUrl) {
    return res.sendStatus(400);
  }
  await models.example.create({ input: input, imageUrl: imgUrl });
  res.sendStatus(200);
});

app.listen(port, async () => {
  // await models.sequelize.sync({ force: true });
  console.log(`Example app listening at http://localhost:${port}`);
});
