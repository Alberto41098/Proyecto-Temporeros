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
    readofertastrabajador(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // const ofertas = await pool.query('SELECT * from ofertas, solicitudes where ofertas.id_oferta = solicitudes.oferta_id and solicitudes.trabajador_id = ?', [req.body.id]);
            const ofertas = yield database_1.default.query('SELECT ofertas.id_oferta, ofertas.titulo, ofertas.descripcion, ofertas.fecha_inicio, ofertas.activo, ofertas.vacantes, ofertas.municipio_id, ofertas.recogida_id, ofertas.empresa_id, municipios.municipio, recogidas.nombre, empresas.nombre as empresa from ofertas, solicitudes, municipios, empresas, recogidas where ofertas.id_oferta = solicitudes.oferta_id and solicitudes.trabajador_id = ? and recogidas.id_recogida = ofertas.recogida_id and ofertas.empresa_id = empresas.id_empresa and municipios.id = ofertas.municipio_id', [req.body.id]);
            res.json(ofertas);
        });
    }
    readofertasempresa(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const ofertas = yield database_1.default.query('SELECT ofertas.id_oferta, ofertas.titulo, ofertas.descripcion, ofertas.fecha_inicio, ofertas.activo, ofertas.vacantes, ofertas.municipio_id, ofertas.recogida_id, ofertas.empresa_id, municipios.municipio, recogidas.nombre, empresas.nombre as empresa from ofertas, municipios, empresas, recogidas where recogidas.id_recogida = ofertas.recogida_id and ofertas.empresa_id = empresas.id_empresa and municipios.id = ofertas.municipio_id and ofertas.empresa_id = ?', [req.body.id]);
            res.json(ofertas);
        });
    }
    readofertasbuscador(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if ((req.body.texto == "") && (req.body.prov == "")) {
                // const ofertas = await pool.query('SELECT * FROM ofertas ');
                const ofertas = yield database_1.default.query('SELECT id_oferta, titulo, descripcion, fecha_inicio, activo, vacantes, municipio_id, recogida_id, empresa_id, municipio, recogidas.nombre, empresas.nombre as empresa FROM ofertas, municipios, recogidas, empresas where municipio_id = municipios.id and recogida_id = id_recogida and id_empresa = empresa_id;');
                res.json(ofertas);
            }
            else if ((req.body.texto == "")) {
                // const ofertas = await pool.query("SELECT * FROM ofertas where municipio_id in(select id from municipios where provincia_id =? ) ", [req.body.prov]);
                const ofertas = yield database_1.default.query("SELECT id_oferta, titulo, descripcion, fecha_inicio, activo, vacantes, municipio_id, recogida_id, empresa_id, municipio, recogidas.nombre, empresas.nombre as empresa FROM ofertas, municipios, recogidas, empresas, provincias where municipio_id = municipios.id and recogida_id = id_recogida and id_empresa = empresa_id and municipios.provincia_id = provincias.id and provincias.id = ?;", [req.body.prov]);
                res.json(ofertas);
            }
            else if (req.body.prov == "") {
                const ofertas = yield database_1.default.query("SELECT id_oferta, titulo, descripcion, fecha_inicio, activo, vacantes, municipio_id, recogida_id, empresa_id, municipio, recogidas.nombre, empresas.nombre as empresa FROM ofertas, municipios, recogidas, empresas where municipio_id = municipios.id and recogida_id = id_recogida and id_empresa = empresa_id and titulo like '%" + req.body.texto + "%'");
                res.json(ofertas);
            }
            else {
                const ofertas = yield database_1.default.query("SELECT id_oferta, titulo, descripcion, fecha_inicio, activo, vacantes, municipio_id, recogida_id, empresa_id, municipio, recogidas.nombre, empresas.nombre as empresa FROM ofertas, municipios, recogidas, empresas, provincias where municipio_id = municipios.id and recogida_id = id_recogida and id_empresa = empresa_id and municipios.provincia_id = provincias.id and provincias.id = ? and titulo like '%" + req.body.texto + "%'", [req.body.prov]);
                res.json(ofertas);
            }
        });
    }
    readofertasultimas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ofertas = yield database_1.default.query('SELECT id_oferta, titulo, descripcion, fecha_inicio, activo, vacantes, municipio_id, recogida_id, empresa_id, municipio, recogidas.nombre, empresas.nombre as empresa FROM ofertas, municipios, recogidas, empresas where municipio_id = municipios.id and recogida_id = id_recogida and id_empresa = empresa_id order by id_oferta DESC limit 8;');
            res.json(ofertas);
        });
    }
}
exports.ofertasController = new OfertasController;
