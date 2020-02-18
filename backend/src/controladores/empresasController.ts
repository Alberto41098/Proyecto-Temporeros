import { Request, Response, json } from 'express';
import pool from '../database';
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY = 'aoa';
// import * as CryptoJS from 'crypto-js';
class EmpresasController {
    public async create(req: Request, res: Response) {
        await pool.query('INSERT INTO empresas SET ?', [req.body]);
    }
    public async read(req: Request, res: Response) {
        const empresas = await pool.query('SELECT * FROM empresas', [req.body]);
        res.json(empresas);
    }
     public async readprovincia(req: Request, res: Response) {       
        const empresas = await pool.query('SELECT * FROM empresas where municipios_id in(select id from municipios where id in(select id from provincias where id=? ) )', [req.body.provincia.id]);
        res.json(empresas);
     }
    public async update(req: Request, res: Response) { 
        const { id } = req.params;
        await pool.query('UPDATE empresas SET ? WHERE id = ?', [id]);
    }
    public async delete(req: Request, res: Response) { 
        const { id } = req.params;
        await pool.query('DELETE FROM empresas WHERE id = ?', [id]);
    }
    public async readone(req: Request, res: Response) { 
        const { id } = req.params;
        const empresa = await pool.query('SELECT * FROM empresas WHERE id = ?', [id]);
        res.json(empresa)
    }
    public async readlogin(req: Request, res: Response) { 
        const { correo, pass } = req.body;
        const empresas = await pool.query('SELECT * FROM empresas WHERE correo = ? and pass = ?', [correo, pass]);
        if (empresas.length == 0) {
            res.json({message: 'No se ha encontrado la empresa'});
        } else {
            // res.json(usuarios)
            const accessToken = jwt.sign({ id: correo }, SECRET_KEY, {expiresIn: 84600});
            res.json(accessToken);
        }
    }
}
export const empresasController = new EmpresasController;