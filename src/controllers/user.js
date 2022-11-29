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
exports.deleteUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
const users_1 = __importDefault(require("../../src/models/users"));
const bcrypt_1 = require("bcrypt");
const findUser_1 = require("../../src/utils/findUser");
const validatePassword_1 = require("../../src/utils/validatePassword");
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const arrayUsers = yield users_1.default.find();
    arrayUsers.filter((user) => user.password); // filtrar que no devuelva la contraseña
    return arrayUsers;
});
exports.getUsers = getUsers;
const getUser = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, findUser_1.findUser)(email);
    return user;
});
exports.getUser = getUser;
const postUser = ({ username, email, password }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, findUser_1.findUser)(email);
    if (!user) {
        const resultValidate = yield (0, validatePassword_1.validatePassword)(password, res);
        if (resultValidate) {
            const encryptPassword = (0, bcrypt_1.hashSync)(password, 10);
            const newUser = yield users_1.default.create({ username, email, password: encryptPassword, rol: 'cliente' });
            return newUser;
        }
    }
});
exports.postUser = postUser;
const deleteUser = (email, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, findUser_1.findUser)(email);
    if ((user === null || user === void 0 ? void 0 : user.email) == email) {
        const deleteUser = yield users_1.default.deleteOne({ email });
        return deleteUser;
    }
});
exports.deleteUser = deleteUser;
