import jwt from 'jsonwebtoken';
import db from '../database.js';

export async function auth(req, res, next) {
    let authToken = req.headers["authorization"];
    if (!authToken) {
        res.status(401).json({ message: 'Token de acesso requerido' });
        return
    }       

    try {
        let token = authToken.split(' ')[1];
        req.token = token; 

        jwt.verify(req.token, process.env.SECRET_KEY, (err, decodeToken) => {
            if (err) {
                res.status(401).json({ message: 'Acesso negado'})
                return
            }
            req.usuarioId = decodeToken.id
            
            next()
        });
    } catch (err) {
        res.status(401).json({ message: 'Acesso negado', error: err });
        return
    }
}

export async function isAdmin(req, res, next) {
    let usuarioId = req.usuarioId;
    try {
        let usuario = await db.select().from('usuario').where({ id: usuarioId });
        if (usuario) {
            let roles = usuario.roles.split(';')
            let adminRole = roles.find(role => role === 'ADMIN')
            if (adminRole === 'ADMIN') {
                next();
                return
            }
            else {
                res.status(403).json({ message: 'Role de ADMIN requerida' });
                return
            }
        }
    } catch (err) {
        res.status(500).json({
            message: 'Erro ao verificar roles de usuário - ' + err.message
        });
        return
    }
}