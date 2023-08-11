import { Router } from "express";
import destinosController from "../controller/destinosController.js";

const router = Router()

router.get("/destinos", destinosController.encontrarDestino)
router.post("/destinos", destinosController.criarDestinos )
router.get("/destinos/:id", destinosController.encontrarDestinoId)
router.patch("/destinos/:id", destinosController.atualizarDestinoId)
router.delete("/destinos/:id", destinosController.deletarDestino)

export default router