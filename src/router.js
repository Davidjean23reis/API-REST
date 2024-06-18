import { Router } from "express";
import empresaController from "./app/controllers/EmpresaController.js";
const router = Router();

router.get("/empresas", empresaController.index);
router.post("/empresas", empresaController.store);
router.get("/empresas/:id", empresaController.show);
router.put("/empresas/:id", empresaController.update);
router.delete("/empresas/:id", empresaController.delete);

export default router;
