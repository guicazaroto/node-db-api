import bcrypt from 'bcryptjs'
import db from '../database.js'

export async function register (req, res) {
    try {
    const result = await db.insert({
        nome: req.body.nome,
        login: req.body.login,
        senha: bcrypt.hashSync(req.body.senha, 8),
        email: req.body.email
        }, ['id']).into('usuario')

      let { id } = result[0]

      res.status(201).json({ id  })
    } catch (err) {
      res.status(500).json({ err })    
  }

}