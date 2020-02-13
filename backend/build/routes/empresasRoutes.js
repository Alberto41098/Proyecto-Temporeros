"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const empresasController_1 = require("../controladores/empresasController");
class EmpresasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', empresasController_1.empresasController.create);
        this.router.get('/', empresasController_1.empresasController.read);
        this.router.put('/:id', empresasController_1.empresasController.update);
        this.router.delete('/:id', empresasController_1.empresasController.delete);
        this.router.get('/:id', empresasController_1.empresasController.readone);
        this.router.post('/login', empresasController_1.empresasController.readlogin);
    }
}
const empresasRoutes = new EmpresasRoutes();
exports.default = empresasRoutes.router;
