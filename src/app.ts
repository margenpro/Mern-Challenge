import express from "express";
import cors from "cors";
import router from "./routes/users";
import mongoose from "mongoose";
//const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Welcome to server");
});
app.listen(port, () => {
  return console.log(`Server running on Port: ${port}`);
});
mongoose.connect(process.env.MONGO_STRING, {}, () => {
  console.log("MongoDB connection established");
});
mongoose.set("bufferCommands", false);
app.use("/users", router);
