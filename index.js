const express = require("express");
const cors = require("cors");

const destination = require("./data/destination.json");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/destination", (req, res) => {
  res.send(destination);
});

app.get("/destination/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);
  const selectedDestination = destination.find((d) => d.id === id);
  res.send(selectedDestination);
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
