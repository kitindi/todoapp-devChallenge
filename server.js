const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3001;

// connection to db
mongoose.connect("mongodb://localhost:27017/devTodoDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => {
  res.send("Up & running");
});

app.listen(port, () => {
  console.log(`Server is running on  http://localhost:${port}`);
});
