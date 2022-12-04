"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    productName: String,
    stock: Number,
    provider: String,
    price: Number,
    category: String,
    imgs: Array,
    description: String
}, { versionKey: false });
const productModel = (0, mongoose_1.model)('Product', ProductSchema);
exports.default = productModel;
