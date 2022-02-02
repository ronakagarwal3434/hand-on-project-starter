const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
var cors = require("cors");

dotenv.config();

const app = express();
app.use(cors());

app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to MongoDB Database"))
  .catch((err) => console.log(err));

app.get("/hello-world", (req, res) => {
  res.send("Hello World");
});

app.use("/api/auth", require(`./routes/auth`));

app.listen(process.env.PORT, () => {
  console.log(`Backend server started at ${process.env.PORT}`);
});
