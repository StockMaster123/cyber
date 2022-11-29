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
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const bcrypt_1 = require("bcrypt");
const express_1 = require("express");
const error_1 = require("../utils/error");
const findUser_1 = require("../utils/findUser");
const getToken_1 = require("../utils/getToken");
const router = (0, express_1.Router)();
exports.router = router;
router.post('/', ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, findUser_1.findUser)(body.email)
        .then((user) => {
        if (user != null) {
            const comparePassword = (0, bcrypt_1.compareSync)(body.password, user === null || user === void 0 ? void 0 : user.password);
            if (body.email == user.email && comparePassword) {
                const token = (0, getToken_1.getToken)(user);
                if (token) {
                    res.status(200).json({ token: token, rol: user.rol, username: user.username, email: user.email });
                }
            }
            else {
                (0, error_1.errorHandle)('Usuario o contraseña incorrecta', res);
            }
        }
        else {
            (0, error_1.errorHandle)('Vaya no hemos encontrado ningún un usuario que coincida con tus credenciales', res);
        }
    })
        .catch(() => { (0, error_1.errorHandle)('Vaya algo a fallado', res); });
}));
