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
const database_1 = __importDefault(require("../database"));
class ProvinciasController {
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const provincias = yield database_1.default.query('SELECT * FROM provincias ORDER BY provincias.provincia ASC');
            res.json(provincias);
        });
    }
    readbyprov(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const municipios = yield database_1.default.query('SELECT municipio,id, provincia_id FROM municipios WHERE provincia_id in(select id from provincias ) AND provincia_id = ? ORDER BY municipio ASC', [req.params.id]);
            res.json(municipios);
        });
    }
}
exports.provinciasController = new ProvinciasController;
