import { Request, Response, json } from 'express';
import pool from '../database';
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY = 'aoa';
// import * as CryptoJS from 'crypto-js';
class TabajadoresController {
    public async create(req: Request, res: Response) {
        await pool.query('INSERT INTO trabajadores SET ?', [req.body]);
    }
    public async read(req: Request, res: Response) {
        const trabajadores = await pool.query('SELECT * FROM trabajadores', [req.body]);
        res.json(trabajadores);
    }
    public async update(req: Request, res: Response) { 
        const { id } = req.params;
        await pool.query('UPDATE trabajadores SET ? WHERE id = ?', [id]);
    }
    public async delete(req: Request, res: Response) { 
        const { id } = req.params;
        await pool.query('DELETE FROM trabajadores WHERE id = ?', [id]);
    }
    public async readone(req: Request, res: Response) { 
        const { id } = req.params;
        const trabajador = await pool.query('SELECT * FROM trabajadores WHERE id = ?', [id]);
        res.json(trabajador)
    }
    public async readlogin(req: Request, res: Response) { 
        const { email, pass } = req.body;
        const trabajadores = await pool.query('SELECT * FROM trabajadores WHERE email = ? and pass = ?', [email, pass]);
        if (trabajadores.length == 0) {
            res.json({message: 'No se ha encontrado el trabajador'});
        } else {
            const accessToken = jwt.sign({ id: email }, SECRET_KEY, {expiresIn: 84600});
            res.json(accessToken);
        }
    }
}
export const trabajadoresController = new TabajadoresController;