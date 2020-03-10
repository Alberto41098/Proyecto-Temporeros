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
        this.router.get('/:trabajador_id/:oferta_id', solicitudesController_1.solicitudesController.create);
    }
}
const solicitudesRoutes = new SolicitudesRoutes();
exports.default = solicitudesRoutes.router;
