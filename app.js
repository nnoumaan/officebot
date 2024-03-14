const express = require("express");
const BotCategory = require("./botSchema");
const dotenv = require("dotenv");
const cors = require("cors");
const sendMail = require("./SendMail");
const searchQuery = require("./searchQuery");
dotenv.config({ path: "./config.env" });
const app = express();


// Middlewares

app.use(cors());

app.use(express.json());
//

//
app.get("/getsubcategory", async (req, res) => {
  const data = await BotCategory.find();

  res.status(200).json({
    success: true,
    message: "Data read successfully",
    data,
  });
});

app.post("/email", sendMail);

app.post("/searchQuery", searchQuery);

module.exports = app;
