import db from '../database.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export async function login(req, res) {
    const usuario = await db.select('*').from('usuario').where({ login: req.body.login })
    const tokenJWT = validateCredentials(usuario, req.body.senha)
    if (tokenJWT) {
      return res.status(200).json({
        id: usuario.id,
        login: usuario.login,
        nome: usuario.nome,
        roles: usuario.roles,
        token: tokenJWT
      })
    }
    res.status(401).json({ message: 'Login ou senha incorretos' })

 
}

function validateCredentials(usuarios, senha) {
  if (!usuarios.length) return null
  let usuario = usuarios[0]
  let checkSenha = bcrypt.compareSync(String(senha), usuario.senha)
  if (checkSenha) {
    const tokenJWT = jwt.sign({ id: usuario.id },
      process.env.SECRET_KEY, {
      expiresIn: 3600
    })
    return tokenJWT
  }
  return null
}