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
      if((req.body.texto=="")&&(req.body.prov=="")){
        const ofertas = await pool.query('SELECT * FROM ofertas ');      
        res.json(ofertas);
      }else if((req.body.texto=="")){
        const ofertas = await pool.query("SELECT * FROM ofertas where municipio_id in(select id from municipios where provincia_id =? ) ", [req.body.prov]);
        res.json(ofertas);
      }else if(req.body.prov==""){
        const ofertas = await pool.query("SELECT * FROM ofertas where titulo like '%"+req.body.texto+"%'" );
       res.json(ofertas);
      }else{
        const ofertas = await pool.query("SELECT * FROM ofertas where municipio_id in(select id from municipios where provincia_id =? ) and titulo like '%"+req.body.texto+"%'", [req.body.prov]);
        res.json(ofertas);
      }
       
    }
   
}
export const ofertasController = new OfertasController;