import { Request, Response } from 'express';
import pool from '../database';
class OfertasController{
    public async create(req: Request, res: Response) {
        await pool.query('INSERT INTO ofertas SET ?', [req.body]);
    }
    public async read(req: Request, res: Response) {
        const ofertas = await pool.query('SELECT * FROM ofertas ');      
        res.json(ofertas);
    }
    public async readofertasbuscador(req: Request, res: Response) {       
        const ofertas = await pool.query('SELECT * FROM ofertas where municipios_id in(select id from municipios where id in(select id from provincias where id=? ) ) and titulo like %?%', [req.body.provincia.id,req.body.titulo]);
        res.json(ofertas);
     }
}
export const ofertasController = new OfertasController;