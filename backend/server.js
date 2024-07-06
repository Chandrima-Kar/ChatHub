const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config({
  path: "./.env",
});

app.get("/", (req, res) => {
  res.send("Hellllllllo");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log(`Server started on port ${PORT} successfully`));
