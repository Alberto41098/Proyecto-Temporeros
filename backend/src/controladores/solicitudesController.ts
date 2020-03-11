import { Request, Response } from 'express';
import pool from '../database';
class SolicitudesController{
    public async create(req: Request, res: Response) {
        const empresa = await pool.query('INSERT INTO solicitudes SET ?', [req.body]);
        res.json(empresa)
       
    }
    public async readofertas(req: Request, res: Response) {
        const solicitudes = await pool.query('SELECT * FROM solicitudes where oferta_id=?', [req.body]);
        res.json(solicitudes);
    }
  
}
export const solicitudesController = new SolicitudesController;