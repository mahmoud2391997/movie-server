// server.js
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Logging middleware
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "logs", "access.log"),
  { flags: "a" }
);
app.use(morgan("combined", { stream: accessLogStream }));

app.use(bodyParser.json());

// Routes
const movieRoutes = require("./src/routes/movieRoutes");
app.use("/movies", movieRoutes);
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "movies.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
