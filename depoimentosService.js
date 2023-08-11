import Relatos from "../model/depoimentos.js";

const criarDepoimento = async (relato) => await Relatos.create(relato)

const encontrarDepoimento = async () => await Relatos.find()

const atualizarDepoimento = async (id, depoimento) => await Relatos.findByIdAndUpdate(id, depoimento)

const encontrarDepoimentoId = async (id) => await Relatos.findById(id)

const deletarDepoimento = async (id) => await Relatos.findByIdAndDelete(id)

const contaTotalDepoimento = async () => await Relatos.count()

const encontrarDepoimentoPaginado = async (page, limit) => await Relatos.find().sort({_id: -1}).skip(( page -1 ) * limit).limit(limit);

export default {
    criarDepoimento, encontrarDepoimento ,
    atualizarDepoimento, encontrarDepoimentoId,
    deletarDepoimento, encontrarDepoimentoPaginado,
    contaTotalDepoimento}