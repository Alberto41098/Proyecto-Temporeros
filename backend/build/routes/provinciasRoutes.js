"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const provinciasController_1 = require("../controladores/provinciasController");
class ProvinciasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', provinciasController_1.provinciasController.read);
        this.router.get('/municipios/:id', provinciasController_1.provinciasController.readbyprov);
    }
}
const provinciasRoutes = new ProvinciasRoutes();
exports.default = provinciasRoutes.router;
