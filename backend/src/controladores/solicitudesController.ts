import { Request, Response } from 'express';
import pool from '../database';
class SolicitudesController{
    public async create(req: Request, res: Response) {
        const empresa = await pool.query('INSERT INTO solicitudes SET ?', [req.params]);
        res.json(empresa)
       
    }
  
}
export const solicitudesController = new SolicitudesController;