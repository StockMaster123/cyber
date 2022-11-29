"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getToken = void 0;
require("dotenv/config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const getToken = ({ email, username, rol }) => {
    const secretKey = "ary16";
    const token = jsonwebtoken_1.default.sign({ email, username, rol }, secretKey);
    return token;
};
exports.getToken = getToken;
