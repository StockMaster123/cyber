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
const product_1 = require("../controllers/product");
const error_1 = require("../utils/error");
const findProduct_1 = require("../utils/findProduct");
const uploadImg_1 = require("../utils/uploadImg");
const verifyToken_1 = require("../utils/verifyToken");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, verifyToken_1.verifyToken)(req)
        .then((e) => {
        if (e != undefined) {
            (0, product_1.getProducts)()
                .then((product) => res.send(product));
        }
        else
            (0, error_1.errorHandle)('error al verificar token', res);
    })
        .catch((err) => {
        (0, error_1.errorHandle)('error al ejecutar la acción', res);
    });
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, verifyToken_1.verifyToken)(req)
        .then((token) => {
        if (token != undefined) {
            (0, product_1.getProduct)(req.params.id)
                .then((product) => res.send(product));
        }
        else
            (0, error_1.errorHandle)('error al verificar token', res);
    })
        .catch((err) => {
        (0, error_1.errorHandle)('error al ejecutar la acción', res);
    });
}));
//Publicar
router.post('/', uploadImg_1.upload.array('img'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, verifyToken_1.verifyToken)(req)
        .then((e) => {
        if (e != undefined) {
            (0, findProduct_1.findProduct)(req.body.productName, res)
                .then((product) => {
                if (product == null) {
                    (0, product_1.postProduct)(req.body, req)
                        .then((product) => res.status(200).json(product))
                        .catch(() => (0, error_1.errorHandle)('error al crear producto', res));
                }
                else {
                    (0, error_1.errorHandle)('Elige otro nombre ya existe un producto con ese nombre', res);
                }
            })
                .catch(() => (0, error_1.errorHandle)('Algo a ocurrido, vuelve a intentarlo', res));
        }
        else
            (0, error_1.errorHandle)('error al verificar token', res);
    })
        .catch((err) => {
        console.log(err);
        (0, error_1.errorHandle)('error al ejecutar la acción', res);
    });
}));
//Actualizar
router.put('/:id', (req, res) => {
    const id = req.params.id;
    (0, verifyToken_1.verifyToken)(req)
        .then((e) => {
        (0, findProduct_1.findProduct)(id, res)
            .then((e) => {
            if (e != undefined && id == req.body.product.productName) {
                (0, product_1.updateProduct)(req)
                    .then(() => res.send(req.body.product))
                    .catch((err) => (0, error_1.errorHandle)('error al encontrar al actualizar el producto', res));
            }
            else {
                (0, error_1.errorHandle)('Error, el nombre no debe de ser modificado', res);
            }
        })
            .catch((err) => {
            (0, error_1.errorHandle)('error al encontrar el producto', res);
        });
    })
        .catch((err) => {
        (0, error_1.errorHandle)('error al encontrar token', res);
    });
});
//eliminar
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    (0, verifyToken_1.verifyToken)(req)
        .then((e) => {
        (0, findProduct_1.findProduct)(id, res)
            .then((e) => {
            if (e != undefined) {
                (0, product_1.deleteProduct)(req)
                    .then(() => res.send('Producto Eliminado'))
                    .catch((err) => (0, error_1.errorHandle)('error, Al borrar el producto', res));
            }
            else {
                (0, error_1.errorHandle)('Error, el producto no a sido encontrado', res);
            }
        });
    })
        .catch((err) => {
        (0, error_1.errorHandle)('error al encontrar token', res);
    });
});
