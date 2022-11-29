"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateParams = void 0;
const validateParams = (id, email) => {
    if (id == email)
        return true;
    else
        return false;
};
exports.validateParams = validateParams;
