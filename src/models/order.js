"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const OrderSchema = new mongoose_1.Schema({
    cliente: String,
    orders: [
        {
            address: Object,
            date: String,
            products: [{
                    productName: String,
                    price: Number,
                    amount: Number,
                    category: String,
                    imgs: []
                }],
            total: Number
        }
    ]
}, { versionKey: false });
const orderModel = (0, mongoose_1.model)('Order', OrderSchema);
exports.default = orderModel;
