"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRol = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const validateRol = (token) => {
    (0, jsonwebtoken_1.decode)(token);
};
exports.validateRol = validateRol;
