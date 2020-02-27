import { Request, Response } from 'express';
import pool from '../database';
class ProvinciasController{
    public async read(req: Request, res: Response) {
        const provincias = await pool.query('SELECT * FROM provincias ORDER BY provincias.provincia ASC');
        res.json(provincias);
    }
    public async readbyprov(req: Request, res: Response) {
        const municipios = await pool.query('SELECT municipios.municipio, municipios.id, municipios.provincia_id FROM municipios, provincias WHERE municipios.provincia_id = provincias.id AND municipios.provincia_id = ? ORDER BY municipios.municipio ASC', [req.params.id]);
        res.json(municipios);
    }
}
export const provinciasController = new ProvinciasController;