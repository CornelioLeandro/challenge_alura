import Destinos from "../model/destinos.js"

const criarDestino = async (destino) => await Destinos.create(destino)

const encontrarDestino = async () => await Destinos.find()

const atualizarDestino = async (id, destinos) => await Destinos.findByIdAndUpdate(id, destinos)

const encontrarDestinoId = async (id) => await Destinos.findById(id)

const deletarDestino = async (id) => await Destinos.findByIdAndDelete(id)

const contaTotalDestino = async () => await Destinos.count()

const encontrarDestinoPaginado = async (page, limit) => await Destinos.find().sort({_id: -1}).skip(( page -1 ) * limit).limit(limit);

export default {criarDestino, encontrarDestino,
        atualizarDestino , encontrarDestinoId,
        deletarDestino , contaTotalDestino,
        encontrarDestinoPaginado }