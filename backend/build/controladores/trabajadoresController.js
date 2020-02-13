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
class TabajadoresController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO trabajadores SET ?', [req.body]);
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const trabajadores = yield database_1.default.query('SELECT * FROM trabajadores', [req.body]);
            res.json(trabajadores);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE trabajadores SET ? WHERE id = ?', [id]);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM trabajadores WHERE id = ?', [id]);
        });
    }
    readone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const trabajador = yield database_1.default.query('SELECT * FROM trabajadores WHERE id = ?', [id]);
            res.json(trabajador);
        });
    }
    readlogin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, pass } = req.body;
            const trabajadores = yield database_1.default.query('SELECT * FROM trabajadores WHERE email = ? and pass = ?', [email, pass]);
            if (trabajadores.length == 0) {
                res.json({ message: 'No se ha encontrado el trabajador' });
            }
            else {
                // res.json(usuarios)
                const accessToken = jwt.sign({ id: email }, SECRET_KEY, { expiresIn: 84600 });
                res.json(accessToken);
            }
        });
    }
}
exports.trabajadoresController = new TabajadoresController;
