"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const solicitudesController_1 = require("../controladores/solicitudesController");
class SolicitudesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', solicitudesController_1.solicitudesController.create);
        this.router.post('/ofertas', solicitudesController_1.solicitudesController.readofertas);
    }
}
const solicitudesRoutes = new SolicitudesRoutes();
exports.default = solicitudesRoutes.router;
