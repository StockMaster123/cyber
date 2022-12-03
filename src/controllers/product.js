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
exports.deleteProduct = exports.updateProduct = exports.postProduct = exports.getProduct = exports.getProducts = void 0;
const product_1 = __importDefault(require("../../src/models/product"));
const getProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield product_1.default.find();
    return products;
});
exports.getProducts = getProducts;
const getProduct = (productName) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield product_1.default.findOne({ productName });
    return products;
});
exports.getProduct = getProduct;
const postProduct = (body, { files }) => __awaiter(void 0, void 0, void 0, function* () {
    const { category, productName, price, provider, stock, description } = body;
    const filesArray = files;
    const imgs = [];
    filesArray.map((img) => {
        imgs.push(img.filename);
    });
    const newProduct = yield product_1.default.create({ category, productName, price, provider, stock, imgs, description });
    return newProduct;
});
exports.postProduct = postProduct;
const updateProduct = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const productName = req.params.id;
    const updatedProduct = yield product_1.default.updateOne({ productName }, Object.assign({}, req.body.product));
    return updatedProduct;
});
exports.updateProduct = updateProduct;
const deleteProduct = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const productName = req.params.id;
    const deleteProduct = yield product_1.default.deleteOne({ productName });
    return deleteProduct;
});
exports.deleteProduct = deleteProduct;
