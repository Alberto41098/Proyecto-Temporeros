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
class OfertasController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO ofertas SET ?', [req.body]);
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ofertas = yield database_1.default.query('SELECT * FROM ofertas ');
            res.json(ofertas);
        });
    }
    readofertasbuscador(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ofertas = yield database_1.default.query('SELECT * FROM ofertas where municipios_id in(select id from municipios where id in(select id from provincias where id=? ) ) and titulo like %?%', [req.params.provincia, req.params.titulo]);
            res.json(ofertas);
        });
    }
}
exports.ofertasController = new OfertasController;
