"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const category_1 = require("../controllers/category");
const error_1 = require("../utils/error");
const findCategory_1 = require("../utils/findCategory");
const verifyToken_1 = require("../utils/verifyToken");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', (req, res) => {
    (0, verifyToken_1.verifyToken)(req)
        .then((token) => {
        if (token != undefined) {
            (0, category_1.getCategories)()
                .then((categories) => res.status(200).json(categories))
                .catch(() => (0, error_1.errorHandle)('Error al obtener categorias', res));
        }
        else
            (0, error_1.errorHandle)('Error al encontrar token', res);
    })
        .catch(() => (0, error_1.errorHandle)('Error al ejecutar acción', res));
});
router.post('/', (req, res) => {
    (0, verifyToken_1.verifyToken)(req)
        .then((token) => {
        if (token != undefined) {
            (0, findCategory_1.findCategory)(req.body.category, res)
                .then((result) => {
                if (result == null) {
                    (0, category_1.postCategory)(req.body)
                        .then((categoria) => res.status(200).json(categoria))
                        .catch((e) => console.log(e));
                }
                else {
                    (0, error_1.errorHandle)('Esta categoria actualmente existe', res);
                }
            });
        }
        else
            (0, error_1.errorHandle)('Error al encontrar token', res);
    })
        .catch(() => (0, error_1.errorHandle)('Error al ejecutar acción', res));
});
