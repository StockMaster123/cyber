"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandle = void 0;
const errorHandle = (error, res) => {
    res.status(500).json(error);
    res.end();
};
exports.errorHandle = errorHandle;
