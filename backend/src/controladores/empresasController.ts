import { Request, Response, json } from 'express';
import pool from '../database';
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY = 'aoa';
// import * as CryptoJS from 'crypto-js';
const salt = bcrypt.genSaltSync(5);
class EmpresasController {
    public async create(req: Request, res: Response) {
        req.body.pass = bcrypt.hashSync(req.body.pass, salt);
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
        await pool.query('UPDATE empresas SET ? WHERE id_empresa = ?', [id]);
    }
    public async delete(req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('DELETE FROM empresas WHERE id_empresa = ?', [id]);
    }
    public async readone(req: Request, res: Response) {
        const { id } = req.params;
        const empresa = await pool.query('SELECT * FROM empresas WHERE id_empresa = ?', [id]);
        res.json(empresa);
    }
    public async readnif(req: Request, res: Response) {
        const { nif } = req.params;
        const empresa = await pool.query('SELECT cifnif FROM empresas WHERE cifnif = ?', [nif]);
        res.json(empresa)
    }
    public async reademail(req: Request, res: Response) {
        const { email } = req.params;
        const empresa = await pool.query('SELECT email FROM empresas WHERE email = ?', [email]);
        res.json(empresa);
    }
    public async readmasofertas(req: Request, res: Response) {
        const empresas = await pool.query('SELECT empresas.nombre, count(id_oferta) NumeroOferta FROM empresas left join ofertas on empresas.id_empresa = ofertas.empresa_id group by empresas.id_empresa order by count(id_oferta) desc limit 3');
        res.json(empresas);
    }
    // public async a(req:Request, res:Response) {
    //     res.json({a: 'a'})
    // }
    public async readtoken(req: Request, res: Response) {
        const { token } = req.body;
        const empresa = await pool.query('SELECT empresas.id_empresa, empresas.cifnif, empresas.nombre, empresas.email, empresas.municipios_id, municipios.municipio FROM empresas, municipios WHERE user_session_token = ? and municipios.id = empresas.municipios_id', [token]);
        if (empresa.length == 0) {
            res.json({ msg: false });
        } else {
            res.json({msg: empresa})
        }
    }
    public async readlogin(req: Request, res: Response) {
        const { email, pass } = req.body;
        const empresas = await pool.query('SELECT * FROM empresas WHERE email = ?', [email]);
        if (empresas.length == 0) {
            res.json({ msg: false });
        } else {
            bcrypt.compare(pass, empresas[0].pass, (err: any, result: any) => {
                if (result) {
                    let accessToken: string = '';
                    if (empresas[0].user_session_token == null) {
                        accessToken = jwt.sign({ id: email }, SECRET_KEY, { expiresIn: 84600 });
                        pool.query('UPDATE empresas set user_session_token = ? where id_empresa = ?', [accessToken, empresas[0].id_empresa]);

                    } else {
                        accessToken = empresas[0].user_session_token;
                    }
                    res.json({ msg: accessToken });
                } else {
                    res.json({ msg: false });
                }
            });
        }
    }
}
export const empresasController = new EmpresasController;