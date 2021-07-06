"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const { Schema } = mongoose;
const quizCategorySchema = new Schema({
    category: [String],
});
const QuizCategory = mongoose.model("QuizCategory", quizCategorySchema);
module.exports = { QuizCategory };
//# sourceMappingURL=quiz.category.model.js.map