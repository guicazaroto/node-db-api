import db from '../db/database.js'

export async function index (_, res) {
  try {
    const data = await db.select().from('produtos');
    res.status(200).json({
      status:1,
      message: "",
      result: data
  });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: `Erro ao listar os produtos ${error.message}` })
  }
}

export async function get(req, res) {
  const { id } = req.params 
  try {
    const data = await db.select().from('produtos').where('id', id);
    res.status(200).json({
      status:1,
      message: "",
      result: data
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: `Erro ao listar o produtos ${error.message}` })
  }
}

export async function create(req, res) {
  const { descricao, valor, marca } = req.body

  try {
    await db.insert({ descricao, valor, marca }).into('produtos');
    res.status(201).json({
      status:1,
      message: "Produto criado com sucesso"
    });
  } catch (error) {
    res.status(500).json({ message: `Erro ao criar o produto ${error.message}` })
  }
}

export async function update(req, res) {
  const { id } = req.params
  const { descricao, valor, marca } = req.body
  const updatedAt = db.fn.now()

  try {
    await db('produtos').where('id', id)
      .update(removeEmpty({ descricao, valor, marca, updated_at:updatedAt }));

    res.status(200).json({
      status:1,
      message: "Produto atualizado com sucesso"
    });
  } catch (error) {
    res.status(500).json({ message: `Erro ao atualizar o produto ${error.message}` })
  }
}


export async function remove (req, res) {
  const { id } = req.params

  try {
    await db('produtos').where('id', id).del();
    res.status(200).json({
      status:1,
      message: "Produto removido com sucesso"
    });
  } catch (error) {
    res.status(500).json({ message: `Erro ao remover o produto ${error.message}` })
  }
}

function removeEmpty(obj) {
  return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null));
}
