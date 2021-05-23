const mongo = require("mongoose");
const { Schema: Schem } = mongo;

const quizSchema = new Schem({
  category: String,
  question: String,
  points: Number,
  bonuspoints: Number,
  negativepoints: Number,
  options: [{ optionvalue: String, isCorrect: Boolean }],
});

const Quiz = mongo.model("QUIZ", quizSchema);

module.exports = { Quiz };
