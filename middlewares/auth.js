export default function auth (req, res) {
  const { authorization } = req.headers
  if (!authorization) {
    return res.status(401).json({ message: 'Não autorizado' })
  }
  const token = authorization.replace('Bearer', '').trim()
  if (!token) {
    return res.status(401).json({ message: 'Não autorizado' })
  }

  // verifica se o token é valido

  return res.status(200).json({ message: 'Autorizado' })
}