"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoClient = void 0;
const mongo = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const uri = process.env.URI;
const MongoClient = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongo.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log({ success: true, message: "Successfully connected to the db" });
    }
    catch (error) {
        console.log({
            success: false,
            error: "Not able to connect to DB",
            message: error.message,
        });
    }
});
exports.MongoClient = MongoClient;
//# sourceMappingURL=mongoose.db.js.map