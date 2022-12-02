"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const order_1 = require("../controllers/order");
const error_1 = require("../utils/error");
const verifyOrder_1 = require("../utils/verifyOrder");
const verifyToken_1 = require("../utils/verifyToken");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/:id', (req, res) => {
    (0, verifyToken_1.verifyToken)(req)
        .then((token) => {
        if (token != undefined) {
            (0, order_1.getOrder)(req.params.id)
                .then((orders) => { res.status(200).send(orders); })
                .catch(() => (0, error_1.errorHandle)('Algo a ocurrido al obtener las ordenes', res));
        }
    })
        .catch((err) => (0, error_1.errorHandle)('No se encontro el token', res));
});
router.post('/', (req, res) => {
    (0, verifyToken_1.verifyToken)(req)
        .then((token) => {
        if (token != undefined) {
            (0, verifyOrder_1.verifyOrden)(token.email)
                .then((orderExist) => {
                (0, order_1.postOrders)(orderExist, req.body)
                    .then((orders) => res.status(200).send(orders))
                    .catch(() => (0, error_1.errorHandle)('Algo a ocurrido al obtener las ordenes', res));
            })
                .catch(() => (0, error_1.errorHandle)('Algo a ocurrido, Vuelve a intentarlo', res));
        }
    })
        .catch((err) => (0, error_1.errorHandle)('No se encontro el token', res));
});
