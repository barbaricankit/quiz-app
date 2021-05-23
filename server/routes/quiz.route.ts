const express = require("express");
const router = express.Router();
const { Quiz: QuizDB } = require("../models/quiz.model");
const {
  QuizCategory: quizCategoryDB,
} = require("../models/quiz.category.model");
router.route("/category").post(async (req: any, res: any) => {
  const category = req.body;
  const newcategory = new quizCategoryDB(category);
  await newcategory.save();
  res.json({ success: true, category: newcategory });
});
router
  .route("/quiz")
  .get(async (req: any, res: any) => {
    const categories = await quizCategoryDB.findOne();
    const getQuiz = await QuizDB.find();
    res.json({ success: true, quiz: getQuiz, categories });
  })
  .post(async (req: any, res: any) => {
    const data = req.body;

    const quiz = new QuizDB(data);
    await quiz.save();
    res.json({ success: true, quiz });
  });

router.route("/quiz/:category").get(async (req: any, res: any) => {
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
