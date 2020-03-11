import { Request, Response } from 'express';
import pool from '../database';
class SolicitudesController{
    public async create(req: Request, res: Response) {
        const check = await pool.query('SELECT id_solicitud FROM solicitudes WHERE trabajador_id = ? and oferta_id = ?', [req.body.trabajador_id, req.body.oferta_id]);
        if (check.length == 0) {
            pool.query('INSERT INTO solicitudes SET ?', [req.body]);
            res.json({succ: true});
        } else {
            res.json({succ: false});
        }
        
    }
    public async readofertas(req: Request, res: Response) {
        const solicitudes = await pool.query('SELECT * FROM solicitudes where oferta_id=?', [req.body]);
        res.json(solicitudes);
    }
  
}
export const solicitudesController = new SolicitudesController;