"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const desaparecidoController_1 = __importDefault(require("../controllers/desaparecidoController"));
class DesaparecidosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', desaparecidoController_1.default.list);
        this.router.get('/:id', desaparecidoController_1.default.getOne);
        this.router.post('/', desaparecidoController_1.default.create);
        this.router.put('/:id', desaparecidoController_1.default.update);
        this.router.delete('/:id', desaparecidoController_1.default.delete);
    }
}
const desaparecidosRoutes = new DesaparecidosRoutes();
exports.default = desaparecidosRoutes.router;
