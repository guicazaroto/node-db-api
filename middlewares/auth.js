import jwt from 'jsonwebtoken'

export default function auth (req, res) {

}

// const jwt = require('jsonwebtoken')
// apiRouter.post(endpoint + 'seguranca/login', (req, res) => {
  // knex
  // .select('*').from('usuario').where( { login: req.body.login })
  // .then( usuarios => {
  // if(usuarios.length){
  // let usuario = usuarios[0]
  // let checkSenha = bcrypt.compareSync (req.body.senha, usuario.senha)
  // if (checkSenha) {
  // var tokenJWT = jwt.sign({ id: usuario.id },
  // process.env.SECRET_KEY, {
  // expiresIn: 3600
  // })
  // res.status(200).json ({
  // id: usuario.id,
  // login: usuario.login,
  // nome: usuario.nome,
  // roles: usuario.roles,
  // token: tokenJWT
  // })
  // return
  // }
// }
    // res.status(200).json({ message: 'Login ou senha incorretos' })
  // })
// .catch (err => {
  // res.status(500).json({
   // message: 'Erro ao verificar login - ' + err.message })
  // })
// })