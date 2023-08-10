import Relatos from "../model/depoimentos.js";

const criarDepoimento = async (relato) => await Relatos.create(relato)

const encontrarDepoimento = async () => await Relatos.find()

const atualizarDepoimento = async (id, depoimento) => await Relatos.findByIdAndUpdate(id, depoimento)

const encontrarDepoimentoId = async (id) => await Relatos.findById(id)

const deletarDepoimento = async (id) => await Relatos.findByIdAndDelete(id)

export default {criarDepoimento, encontrarDepoimento , atualizarDepoimento, encontrarDepoimentoId, deletarDepoimento}