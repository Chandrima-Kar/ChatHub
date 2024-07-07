const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

dotenv.config({
  path: "./.env",
});
connectDB();
const app = express();

app.use(express.json()); //to accept JSON data

app.get("/", (req, res) => {
  res.send("Hellllllllo");
});

app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log(`Server started on port ${PORT} successfully`));
