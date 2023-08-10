import { Router } from 'express';
import depoimentosController from '../controller/depoimentosController.js';

const router = Router();

router.post('/', depoimentosController.criarDepoimento);
router.get('/', depoimentosController.encontrarDepoimentos);
router.patch("/:id" , depoimentosController.atualizarDepoimento)
router.delete("/:id" , depoimentosController.deletarDepoimento)


export default router;
