import { Request, Response, json } from 'express';
import pool from '../database';
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY = 'aoa';
// import * as CryptoJS from 'crypto-js';
class UsuariosController {
    public async create(req: Request, res: Response) {
        await pool.query('INSERT INTO usuarios SET ?', [req.body]);
    }
    public async read(req: Request, res: Response) {
        const usuarios = await pool.query('SELECT * FROM usuarios', [req.body]);
        res.json(usuarios);
    }
    public async update(req: Request, res: Response) { 
        const { id } = req.params;
        await pool.query('UPDATE usuarios SET ? WHERE id = ?', [id]);
    }
    public async delete(req: Request, res: Response) { 
        const { id } = req.params;
        await pool.query('DELETE FROM usuarios WHERE id = ?', [id]);
    }
    public async readone(req: Request, res: Response) { 
        const { id } = req.params;
        const usuario = await pool.query('SELECT * FROM usuarios WHERE id = ?', [id]);
        res.json(usuario)
    }
    public async readlogin(req: Request, res: Response) { 
        const { nombre, imagen } = req.body;
        const usuarios = await pool.query('SELECT * FROM usuarios WHERE nombre = ? and imagen = ?', [nombre, imagen]);
        if (usuarios.length == 0) {
            res.json({message: 'no se ha encontrado el usuario'});
        } else {
            // res.json(usuarios)
            const accessToken = jwt.sign({ id: nombre }, SECRET_KEY, {expiresIn: 84600});
            res.json(accessToken);
        }
    }
}
export const usuariosController = new UsuariosController;