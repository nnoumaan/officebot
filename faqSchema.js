const mongoose = require("mongoose");

const faqSubCategory = new mongoose.Schema({
  Q1: {
    type: String,
  },

  A1: {
    type: String,
  },

  Category_ID: {
    type: String,
  },
});

const FaqModel = mongoose.model("faqs", faqSubCategory);

module.exports = FaqModel;
