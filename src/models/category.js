"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CategorySchema = new mongoose_1.Schema({
    category: String,
    description: String
}, { versionKey: false });
const categoryModel = (0, mongoose_1.model)('Category', CategorySchema);
exports.default = categoryModel;
