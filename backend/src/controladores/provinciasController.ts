import { Request, Response } from 'express';
import pool from '../database';
class ProvinciasController{
    public async read(req: Request, res: Response) {
        const provincias = await pool.query('SELECT * FROM provincias ORDER BY provincias.provincia ASC');
        console.log('estoy en provincias,', provincias);
        res.json(provincias);
    }
}
export const provinciasController = new ProvinciasController;