import express, { Router } from "express";
import Calculations from "@controllers/calculations"

const router: Router = express.Router();

router.post("/kemeni-snella", Calculations.kemeniSnella);
router.post("/kondorse", Calculations.kondorse);
router.post("/pair-comparsion", Calculations.pairComparsion);
router.post("/preference", Calculations.preference);
router.post("/sequentially-comparison", Calculations.sequentiallyComparison);
router.post("/weighing", Calculations.weighing);

export default router;
