var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const exp = require("express");
const routers = exp.Router();
const { QuizCategory: quizCategoryDB, } = require("../models/quiz.category.model");
routers
    .route("/category")
    .post((req, res) => __awaiter(this, void 0, void 0, function* () {
    const category = req.body;
    const newcategory = new quizCategoryDB(category);
    yield newcategory.save();
    res.json({ success: true, category: newcategory });
}));
module.exports = { routers };
//# sourceMappingURL=quiz.category.route.js.map