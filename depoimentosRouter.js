import { Router } from 'express';
import depoimentosController from '../controller/depoimentosController.js';

const router = Router();
router.get('/depoimentos', depoimentosController.encontrarDepoimentos);
router.get('/depoimentos-home', depoimentosController.encontrarDepoimentosRandomico);

router.post('/depoimentos', depoimentosController.criarDepoimento);
router.patch("/depoimentos/:id" , depoimentosController.atualizarDepoimento)
router.delete("/depoimentos/:id" , depoimentosController.deletarDepoimento)


export default router;
