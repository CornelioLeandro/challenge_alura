import destinosService from "../service/destinosService.js"

const criarDestinos = async (req, res) => {
    try{
        const destino = req.body
        const destinoCriado = await destinosService.criarDestino(destino)
        res.status(200).json(destinoCriado)
    }catch(error){
        res.status(500).json(destinos)
    }
}

const encontrarDestino = async (req , res) => {
    try{
        const destinos = await destinosService.encontrarDestino()
        res.status(200).json(destinos)
    }catch(error){
        res.status(500).json(destinos)
    }
}

const atualizarDestinoId = async (req , res) => {
    try{
        const id = req.params.id
        const destino = req.body
        const destinos = await destinosService.atualizarDestino(id,destino)
        res.status(200).json(destinos)
    }catch(error){
        res.status(500).json(destinos)
    }
}

const deletarDestino = async (req , res) => {
    try{
        const id = req.params.id
        const destinos = await destinosService.deletarDestino(id)
        res.status(200).json(destinos)
    }catch(error){
        res.status(500).json(destinos)
    }
}


const encontrarDestinoId = async (req , res) => {
    try{
        const id = req.params.id
        const destinos = await destinosService.encontrarDestinoId(id)
        res.status(200).json(destinos)
    }catch(error){
        res.status(500).json(destinos)
    }
}


export default {criarDestinos, encontrarDestino,
    atualizarDestinoId, deletarDestino,
    encontrarDestinoId}