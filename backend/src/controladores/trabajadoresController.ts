import { Request, Response, json } from 'express';
import pool from '../database';
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY = 'mab';
// import * as CryptoJS from 'crypto-js';
const salt = bcrypt.genSaltSync(10);
class TabajadoresController {
    public async create(req: Request, res: Response) {
        req.body.pass = bcrypt.hashSync(req.body.pass, salt);
        await pool.query('INSERT INTO trabajadores SET ?', [req.body]);
    }
    public async read(req: Request, res: Response) {
        const trabajadores = await pool.query('SELECT * FROM trabajadores', [req.body]);
        res.json(trabajadores);
    }
    public async update(req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('UPDATE trabajadores SET ? WHERE id_trabajador = ?', [id]);
    }
    public async delete(req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('DELETE FROM trabajadores WHERE id_trabajador = ?', [id]);
    }
    public async reademail(req: Request, res: Response) {
        const { email } = req.params;
        const trabajador = await pool.query('SELECT email FROM trabajadores WHERE email = ?', [email]);
        res.json(trabajador)
    }
    public async readdni(req: Request, res: Response) {
        const { dni } = req.params;
        const trabajador = await pool.query('SELECT dni FROM trabajadores WHERE dni = ?', [dni]);
        res.json(trabajador)
    }
    public async readone(req: Request, res: Response) {
        const { id } = req.params;
        const trabajador = await pool.query('SELECT * FROM trabajadores WHERE id_trabajador = ?', [id]);
        res.json(trabajador)
    }
    public async readtoken(req: Request, res: Response) {
        const { token } = req.body;
        // const trabajador = await pool.query('SELECT * FROM trabajadores WHERE user_session_token = ?', [token]);
        const trabajador = await pool.query('SELECT trabajadores.id_trabajador, trabajadores.DNI, trabajadores.nombre, trabajadores.apellidos, trabajadores.email, trabajadores.telefono, trabajadores.curriculum, trabajadores.municipio_id, municipios.municipio FROM trabajadores, municipios WHERE user_session_token = ? and trabajadores.municipio_id = municipios.id', [token]);
        if (trabajador.length == 0) {
            res.json({msg: false});
        } else {
            res.json({msg: trabajador})
        }
    }
    public async readlogin(req: Request, res: Response) {
        const { email, pass } = req.body;
        const trabajadores = await pool.query('SELECT * FROM trabajadores WHERE email = ?', [email]);
        if (trabajadores.length == 0) {
            res.json({ msg: false });
        } else {
            bcrypt.compare(pass, trabajadores[0].pass, (err: any, result: any) => {
                if (result) {
                    let accessToken: string = '';
                    if (trabajadores[0].user_session_token == null) {
                        accessToken = jwt.sign({ id: email }, SECRET_KEY, { expiresIn: 84600 });
                        pool.query('UPDATE trabajadores set user_session_token = ? where id_trabajador = ?', [accessToken, trabajadores[0].id_trabajador]);
                    } else {
                        accessToken = trabajadores[0].user_session_token;
                    }
                    res.json({ msg : accessToken });
                } else {
                    res.json({ msg: false });
                }
            });
        }
    }
}
export const trabajadoresController = new TabajadoresController;