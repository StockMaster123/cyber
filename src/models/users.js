"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    username: String,
    email: String,
    password: String,
    rol: String
}, { versionKey: false });
const userModel = (0, mongoose_1.model)('Users', UserSchema);
exports.default = userModel;
