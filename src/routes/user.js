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
const express_1 = require("express");
const user_1 = require("../controllers/user");
const error_1 = require("../utils/error");
const verifyToken_1 = require("../utils/verifyToken");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', (req, res) => {
    (0, verifyToken_1.verifyToken)(req) //revisar al momento de que exista un cambio en la base de datos
        .then((e) => {
        if (e != undefined && e.rol == 'admin') {
            (0, user_1.getUsers)()
                .then((users) => res.send(users));
        }
        else
            (0, error_1.errorHandle)('Error al verificar usuario', res);
    })
        .catch(() => (0, error_1.errorHandle)('Error al encontrar el token', res));
});
router.get('/:id', (req, res) => {
    const { id } = req.params;
    (0, verifyToken_1.verifyToken)(req) //validar si el body.email es igual id, por que de otra manera cualquiera puede acceder
        .then((e) => {
        if (e != undefined) {
            (0, user_1.getUser)(id)
                .then((user) => {
                console.log(user);
                if (user != undefined) {
                    res.send(user);
                }
                else
                    (0, error_1.errorHandle)('Error, Usuario no encontrado', res);
            });
        }
    })
        .catch(() => (0, error_1.errorHandle)('Error al encontrar el token', res));
});

router.post('/', ({ body }, res) => {
    (0, user_1.postUser)(body, res)
        .then((user) => {
        if (user != undefined) {
            findUser(user.username)
            .then((usuarioFind) => {
                if ( usuarioFind != null){
                    getToken(usuarioFind)
                    const token =  getToken(user)
                    if ( token ) {
                     res.status(200).json({ token:token, rol: user.rol, username: user.username, email: user.email })
                    }
                    else errorHandle('Error al obtener usuario', res)
                    
                }
            })
            .catch((err) => (0, error_1.errorHandle)('Error', res))
        }
        else
            ((0, error_1.errorHandle)('Error al crear usuario', res));
    });
});

router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = yield (0, verifyToken_1.verifyToken)(req);
    if (token != undefined) {
        const { id } = req.params;
        (0, user_1.deleteUser)(id, res);
    }
    else {
        (0, error_1.errorHandle)('Error al encontrar token', res);
    }
}));
