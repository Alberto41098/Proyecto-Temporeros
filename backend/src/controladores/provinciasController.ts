import { Request, Response } from 'express';
import pool from '../database';
class ProvinciasController{
    public async read(req: Request, res: Response) {
        const provincias = await pool.query('SELECT * FROM provincias ORDER BY provincias.provincia ASC');
        res.json(provincias);
    }
    public async readbyprov(req: Request, res: Response) {
        const municipios = await pool.query('SELECT municipio,id, provincia_id FROM municipios WHERE provincia_id in(select id from provincias ) AND provincia_id = ? ORDER BY municipio ASC', [req.params.id]);
        res.json(municipios);
    }
}
export const provinciasController = new ProvinciasController;