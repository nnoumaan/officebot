const mongoose = require("mongoose");

const botSubCategory = new mongoose.Schema({
  policy_ID: {
    type: String,
  },

  category_Name: {
    type: String,
  },
});

const BotCategory = mongoose.model("categories", botSubCategory);

module.exports = BotCategory;
