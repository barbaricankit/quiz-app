import { Quiz_Category_Type } from "../dataTypes/data.types";

const mongoose = require("mongoose");
const { Schema } = mongoose;

const quizCategorySchema: Quiz_Category_Type = new Schema({
  category: [String],
});

const QuizCategory: Quiz_Category_Type = mongoose.model(
  "QuizCategory",
  quizCategorySchema
);

module.exports = { QuizCategory };
