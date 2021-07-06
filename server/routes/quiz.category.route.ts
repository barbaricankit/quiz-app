const exp = require("express");
const routers = exp.Router();

const {
  QuizCategory: quizCategoryDB,
} = require("../models/quiz.category.model");
routers
  .route("/category")
  .post(async (req: typeof exp.Request, res: typeof exp.Response) => {
    const category = req.body;
    const newcategory = new quizCategoryDB(category);
    await newcategory.save();
    res.json({ success: true, category: newcategory });
  });

module.exports = { routers };
