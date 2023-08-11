import depoimentosService from "../service/depoimentosService.js";

const criarDepoimento = async (req, res) => {
  try {
    const depoimentos = req.body;
    const depoimento = await depoimentosService.criarDepoimento(depoimentos)
    return res.status(200).json(depoimento);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const encontrarDepoimentos = async (req, res) => {
  try {
    const depoimentos = await depoimentosService.encontrarDepoimento()
    return res.status(200).json(depoimentos);
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

const atualizarDepoimento = async (req, res) => {
  try {
    const id = req.params.id
    const depoimento = req.body
    await depoimentosService.atualizarDepoimento(id, depoimento)
    const depoimentoAtualizado = await depoimentosService.encontrarDepoimentoId(id)

    return res.status(200).json(depoimentoAtualizado);
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

const deletarDepoimento = async (req, res) => {
  try {
    const id = req.params.id
    await depoimentosService.deletarDepoimento(id)
    return res.status(200).send("Depoimento deletado");
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

const encontrarDepoimentosRandomico = async (req, res) => {
  try {
    let { limit = 0, page = 3 } = req.query;

    ({ limit, page } = await limiteDepoimentosPossivel(limit, page));

    const depoimentos = await depoimentosService.encontrarDepoimentoPaginado(limit, page)

    return res.status(200).json(depoimentos);
  } catch (error) {
    return res.status(500).json(error.message);
  }
}


async function limiteDepoimentosPossivel(limit, page) {

  const total = await depoimentosService.contaTotalDepoimento()
  limit = total
  limit = Number(limit);
  page = Number(page);
  limit = limit / page;
  limit = Math.floor(limit);
  
  limit = transformaLimiteEmRandomico(limit);

  return { limit, page };
}

function transformaLimiteEmRandomico(limit) {
  return Math.floor( Math.random() * limit) +1
}

export default { criarDepoimento, encontrarDepoimentos, atualizarDepoimento, deletarDepoimento, encontrarDepoimentosRandomico };