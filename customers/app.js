const { v4: uuidv4 } = require("uuid");
const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/", (req, res) => {
  res.send("This is a post request");
});

app.listen(PORT, () => {
  console.log("App listening port" + PORT);
});

console.log(uuidv4());