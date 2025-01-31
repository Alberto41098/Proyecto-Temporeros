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
class SolicitudesController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const check = yield database_1.default.query('SELECT id_solicitud FROM solicitudes WHERE trabajador_id = ? and oferta_id = ?', [req.body.trabajador_id, req.body.oferta_id]);
            if (check.length == 0) {
                database_1.default.query('INSERT INTO solicitudes SET ?', [req.body]);
                res.json({ succ: true });
            }
            else {
                res.json({ succ: false });
            }
        });
    }
    readofertas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const solicitudes = yield database_1.default.query('SELECT * FROM solicitudes where oferta_id=?', [req.body]);
            res.json(solicitudes);
        });
    }
}
exports.solicitudesController = new SolicitudesController;
