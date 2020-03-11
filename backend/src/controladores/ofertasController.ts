import { Request, Response } from 'express';
import pool from '../database';
class OfertasController {
  public async create(req: Request, res: Response) {
    await pool.query('INSERT INTO ofertas SET ?', [req.body]);
  }
  public async read(req: Request, res: Response) {
    const ofertas = await pool.query('SELECT * FROM ofertas ');
    res.json(ofertas);
  }
  public async readofertastrabajador(req: Request, res: Response) {
    // const ofertas = await pool.query('SELECT * from ofertas, solicitudes where ofertas.id_oferta = solicitudes.oferta_id and solicitudes.trabajador_id = ?', [req.body.id]);
    const ofertas = await pool.query('SELECT ofertas.id_oferta, ofertas.titulo, ofertas.descripcion, ofertas.fecha_inicio, ofertas.activo, ofertas.vacantes, ofertas.municipio_id, ofertas.recogida_id, ofertas.empresa_id, municipios.municipio, recogidas.nombre, empresas.nombre as empresa from ofertas, solicitudes, municipios, empresas, recogidas where ofertas.id_oferta = solicitudes.oferta_id and solicitudes.trabajador_id = ? and recogidas.id_recogida = ofertas.recogida_id and ofertas.empresa_id = empresas.id_empresa and municipios.id = ofertas.municipio_id', [req.body.id]);
    res.json(ofertas);
  }
  public async readofertasempresa(req: Request, res: Response) {
    console.log(req.body)
    const ofertas = await pool.query('SELECT ofertas.id_oferta, ofertas.titulo, ofertas.descripcion, ofertas.fecha_inicio, ofertas.activo, ofertas.vacantes, ofertas.municipio_id, ofertas.recogida_id, ofertas.empresa_id, municipios.municipio, recogidas.nombre, empresas.nombre as empresa from ofertas, municipios, empresas, recogidas where recogidas.id_recogida = ofertas.recogida_id and ofertas.empresa_id = empresas.id_empresa and municipios.id = ofertas.municipio_id and ofertas.empresa_id = ?', [req.body.id]);
    res.json(ofertas);
  }
  public async readofertasbuscador(req: Request, res: Response) {
    if ((req.body.texto == "") && (req.body.prov == "")) {
      // const ofertas = await pool.query('SELECT * FROM ofertas ');
      const ofertas = await pool.query('SELECT id_oferta, titulo, descripcion, fecha_inicio, activo, vacantes, municipio_id, recogida_id, empresa_id, municipio, recogidas.nombre, empresas.nombre as empresa FROM ofertas, municipios, recogidas, empresas where municipio_id = municipios.id and recogida_id = id_recogida and id_empresa = empresa_id;');
      res.json(ofertas);
    } else if ((req.body.texto == "")) {
      // const ofertas = await pool.query("SELECT * FROM ofertas where municipio_id in(select id from municipios where provincia_id =? ) ", [req.body.prov]);
      const ofertas = await pool.query("SELECT id_oferta, titulo, descripcion, fecha_inicio, activo, vacantes, municipio_id, recogida_id, empresa_id, municipio, recogidas.nombre, empresas.nombre as empresa FROM ofertas, municipios, recogidas, empresas, provincias where municipio_id = municipios.id and recogida_id = id_recogida and id_empresa = empresa_id and municipios.provincia_id = provincias.id and provincias.id = ?;", [req.body.prov]);
      res.json(ofertas);
    } else if (req.body.prov == "") {
      const ofertas = await pool.query("SELECT id_oferta, titulo, descripcion, fecha_inicio, activo, vacantes, municipio_id, recogida_id, empresa_id, municipio, recogidas.nombre, empresas.nombre as empresa FROM ofertas, municipios, recogidas, empresas where municipio_id = municipios.id and recogida_id = id_recogida and id_empresa = empresa_id and titulo like '%" + req.body.texto + "%'");
      res.json(ofertas);
    } else {
      const ofertas = await pool.query("SELECT id_oferta, titulo, descripcion, fecha_inicio, activo, vacantes, municipio_id, recogida_id, empresa_id, municipio, recogidas.nombre, empresas.nombre as empresa FROM ofertas, municipios, recogidas, empresas, provincias where municipio_id = municipios.id and recogida_id = id_recogida and id_empresa = empresa_id and municipios.provincia_id = provincias.id and provincias.id = ? and titulo like '%" + req.body.texto + "%'", [req.body.prov]);
      res.json(ofertas);
    }

  }
  public async readofertasultimas(req: Request, res: Response) {
    const ofertas = await pool.query('SELECT id_oferta, titulo, descripcion, fecha_inicio, activo, vacantes, municipio_id, recogida_id, empresa_id, municipio, recogidas.nombre, empresas.nombre as empresa FROM ofertas, municipios, recogidas, empresas where municipio_id = municipios.id and recogida_id = id_recogida and id_empresa = empresa_id order by id_oferta DESC limit 8;');
    res.json(ofertas);
  }

}
export const ofertasController = new OfertasController;