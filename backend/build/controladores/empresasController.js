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
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY = 'aoa';
// import * as CryptoJS from 'crypto-js';
class EmpresasController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO empresas SET ?', [req.body]);
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const empresas = yield database_1.default.query('SELECT * FROM empresas', [req.body]);
            res.json(empresas);
        });
    }
    // public async readprovincia(req: Request, res: Response) {
    //     const empresas = await pool.query('SELECT * FROM empresas where municipios_id in(select id from municipios where id in(select id from provincias where provincia=? ) )', [req.body.provincia]);
    //     res.json(empresas);
    // }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE empresas SET ? WHERE id = ?', [id]);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM empresas WHERE id = ?', [id]);
        });
    }
    readone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const empresa = yield database_1.default.query('SELECT * FROM empresas WHERE id = ?', [id]);
            res.json(empresa);
        });
    }
    readlogin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { correo, pass } = req.body;
            const empresas = yield database_1.default.query('SELECT * FROM empresas WHERE correo = ? and pass = ?', [correo, pass]);
            if (empresas.length == 0) {
                res.json({ message: 'No se ha encontrado la empresa' });
            }
            else {
                // res.json(usuarios)
                const accessToken = jwt.sign({ id: correo }, SECRET_KEY, { expiresIn: 84600 });
                res.json(accessToken);
            }
        });
    }
}
exports.empresasController = new EmpresasController;
