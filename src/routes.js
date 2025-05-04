import { Router } from "express";
import TeamController from "./app/controllers/TeamController.js";

const router = Router()

router.get('/selecoes', TeamController.index)
router.get('/selecoes/:id', TeamController.show)
router.post('/selecoes', TeamController.store)
router.put('/selecoes/:id', TeamController.update)
router.delete('/selecoes/:id', TeamController.delete)

export default router
