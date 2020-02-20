"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const municipiosController_1 = require("../controladores/municipiosController");
class MunicipiosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/provincia', municipiosController_1.municipiosController.readbyprov);
    }
}
const municipiosRoutes = new MunicipiosRoutes();
exports.default = municipiosRoutes;
