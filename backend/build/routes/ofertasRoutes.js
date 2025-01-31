"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ofertasController_1 = require("../controladores/ofertasController");
class OfertasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', ofertasController_1.ofertasController.create);
        this.router.get('/', ofertasController_1.ofertasController.read);
        this.router.post('/busqueda', ofertasController_1.ofertasController.readofertasbuscador);
        this.router.post('/trabajador', ofertasController_1.ofertasController.readofertastrabajador);
        this.router.post('/empresa', ofertasController_1.ofertasController.readofertasempresa);
        this.router.get('/ofertas', ofertasController_1.ofertasController.readofertasultimas);
    }
}
const ofertasRoutes = new OfertasRoutes();
exports.default = ofertasRoutes.router;
