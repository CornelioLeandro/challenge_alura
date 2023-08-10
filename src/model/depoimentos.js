import mongoose from "mongoose";

const depoimentoSchema = new mongoose.Schema(
    {
    nome: {
        type: String,
        require: true
     },
    depoimento: {
        type: String,
        require: true
     },
    foto: {
        type: String,
        require: true
     },
     });

const Relatos = mongoose.model('Relatos', depoimentoSchema);
export default Relatos