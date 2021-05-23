var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const express = require("express");
const router = express.Router();
const { Quiz: QuizDB } = require("../models/quiz.model");
const { QuizCategory: quizCategoryDB, } = require("../models/quiz.category.model");
router.route("/category").post((req, res) => __awaiter(this, void 0, void 0, function* () {
    const category = req.body;
    const newcategory = new quizCategoryDB(category);
    yield newcategory.save();
    res.json({ success: true, category: newcategory });
}));
router
    .route("/quiz")
    .get((req, res) => __awaiter(this, void 0, void 0, function* () {
    const categories = yield quizCategoryDB.findOne();
    const getQuiz = yield QuizDB.find();
    res.json({ success: true, quiz: getQuiz, categories });
}))
    .post((req, res) => __awaiter(this, void 0, void 0, function* () {
    const data = req.body;
    const quiz = new QuizDB(data);
    yield quiz.save();
    res.json({ success: true, quiz });
}));
router.route("/quiz/:category").get((req, res) => __awaiter(this, void 0, void 0, function* () {
    const { category } = req.params;
    const getQuizByCategory = yield QuizDB.find({ category });
    if (getQuizByCategory.length > 0) {
        res.json({ success: true, quiz: getQuizByCategory });
    }
    else {
        res.json({
            success: false,
            message: "There are no quiz for this category",
        });
    }
}));
module.exports = { router };
//# sourceMappingURL=quiz.route.js.map