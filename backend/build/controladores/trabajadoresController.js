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
const SECRET_KEY = 'mab';
// import * as CryptoJS from 'crypto-js';
const salt = bcrypt.genSaltSync(10);
class TabajadoresController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            req.body.pass = bcrypt.hashSync(req.body.pass, salt);
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
            yield database_1.default.query('UPDATE trabajadores SET ? WHERE id_trabajador = ?', [id]);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM trabajadores WHERE id_trabajador = ?', [id]);
        });
    }
    reademail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email } = req.params;
            const trabajador = yield database_1.default.query('SELECT email FROM trabajadores WHERE email = ?', [email]);
            res.json(trabajador);
        });
    }
    readdni(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { dni } = req.params;
            const trabajador = yield database_1.default.query('SELECT dni FROM trabajadores WHERE dni = ?', [dni]);
            res.json(trabajador);
        });
    }
    readone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const trabajador = yield database_1.default.query('SELECT * FROM trabajadores WHERE id_trabajador = ?', [id]);
            res.json(trabajador);
        });
    }
    readtoken(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { token } = req.body;
            const trabajador = yield database_1.default.query('SELECT * FROM trabajadores WHERE user_session_token = ?', [token]);
            if (trabajador.length == 0) {
                res.json({ message: 'no se encontro' });
            }
            else {
                res.json(trabajador);
            }
        });
    }
    readlogin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, pass } = req.body;
            const trabajadores = yield database_1.default.query('SELECT * FROM trabajadores WHERE email = ?', [email]);
            if (trabajadores.length == 0) {
                res.json({ message: 'no se encontro' });
            }
            else {
                bcrypt.compare(pass, trabajadores[0].pass, (err, result) => {
                    if (result) {
                        let accessToken = '';
                        if (trabajadores[0].user_session_token == null) {
                            accessToken = jwt.sign({ id: email }, SECRET_KEY, { expiresIn: 84600 });
                            database_1.default.query('UPDATE trabajadores set user_session_token = ? where id_trabajador = ?', [accessToken, trabajadores[0].id_trabajador]);
                        }
                        else {
                            accessToken = trabajadores[0].user_session_token;
                        }
                        res.json(accessToken);
                    }
                    else {
                        res.json({ mes: 'usuario y contraseña incorrecta' });
                    }
                });
            }
        });
    }
}
exports.trabajadoresController = new TabajadoresController;
