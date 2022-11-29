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
exports.findCategory = void 0;
const category_1 = __importDefault(require("../../src/models/category"));
const error_1 = require("../../src/utils/error");
const findCategory = (category, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existCategory = yield category_1.default.findOne({ category });
        return existCategory;
    }
    catch (error) {
        (0, error_1.errorHandle)('Error al ejecutar acción', res);
    }
});
exports.findCategory = findCategory;
