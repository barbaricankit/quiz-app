const express = require("express");
const router = express.Router();
const { Quiz: QuizDB } = require("../models/quiz.model");
const { QuizCategory } = require("../models/quiz.category.model");
router
  .route("/quiz")
  .get(async (req: typeof express.Request, res: typeof express.Response) => {
    const categories = await QuizCategory.findOne();
    const getQuiz = await QuizDB.find();
    res.json({ success: true, quiz: getQuiz, categories });
  })
  .post(async (req: typeof express.Request, res: typeof express.Response) => {
    const data = req.body;

    const quiz = new QuizDB(data);
    await quiz.save();
    res.json({ success: true, quiz });
  });

router
  .route("/quiz/:category")
  .get(async (req: typeof express.Request, res: typeof express.Response) => {
    const { category } = req.params;
    const getQuizByCategory = await QuizDB.find({ category });
    if (getQuizByCategory.length > 0) {
      res.json({ success: true, quiz: getQuizByCategory });
    } else {
      res.json({
        success: false,
        message: "There are no quiz for this category",
      });
    }
  });

module.exports = { router };
