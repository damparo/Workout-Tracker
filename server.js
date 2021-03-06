const express = require("express");
const mongoose = require("mongoose");
const path = require("path");




const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutTracker", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));

app.get("/", (req, res) => {
  res.sendfile(path.join(__dirname + "/public/index.html"));
});

app.get("/exercise", (req, res) => {
  res.sendfile(path.join(__dirname + "/public/exercise.html"));
});

app.get("/stats", (req, res) => {
  res.sendfile(path.join(__dirname + "/public/stats.html"));
});



app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
