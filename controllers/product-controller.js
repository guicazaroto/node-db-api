import db from '../database.js'

export async function index (_, res) {
  try {
    const data = await db.select().from('produto');
    res.status(200).json({ data })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Erro ao listar produtos' })
  }
}

export async function get(req, res) {
  const { id } = req.params 
  try {
    const data = await db.select().from('produto').where('id', id);
    res.status(200).json({ data })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Erro ao listar produto' })
  }
}

export async function create(req, res) {
  const { descricao, valor, marca } = req.body

  try {
    await db.insert({ descricao, valor, marca }).into('produto');
    res.status(201).json({ message: 'Produto criado com sucesso' })
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar produto' })
  }
}

export async function update(req, res) {
  const { id } = req.params
  const { descricao, valor, marca } = req.body

  try {
    await db('produto').where('id', id)
      .update(removeEmpty({ descricao, valor, marca }));

    res.status(200).json({ message: 'Produto atualizado com sucesso' })
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar produto' })
  }
}


export async function remove (req, res) {
  const { id } = req.params

  try {
    await db('produto').where('id', id).del();
    res.status(200).json({ message: 'Produto removido com sucesso' })
  } catch (error) {
    res.status(500).json({ message: 'Erro ao remover produto' })
  }
}

function removeEmpty(obj) {
  return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null));
}
