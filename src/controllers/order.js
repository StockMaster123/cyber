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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postOrders = exports.getOrder = void 0;
const order_1 = __importDefault(require("../../src/models/order"));
const getOrder = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const orders = yield order_1.default.find({ cliente: id });
    return orders;
});
exports.getOrder = getOrder;
const postOrders = (result, order) => __awaiter(void 0, void 0, void 0, function* () {
    if (result == null) {
        const newOrder = yield order_1.default.create(order);
        return newOrder;
    }
    else {
        const orders = result.orders;
        order.orders.forEach(orderItem => {
            orders.push(orderItem);
        });
        const updateOrder = yield order_1.default.updateOne({ cliente: result.cliente }, { orders });
        return updateOrder;
    }
});
exports.postOrders = postOrders;
