import express, { Request, Response, Router } from "express";
import Calculations from "../usecases/calculations"

const router: Router = express.Router();

router.post("/kemeni-snella", (req, res) => {
    let result = Calculations.kemeniSnella(req.body.inputMatrix, req.body.x, req.body.y)
    res.send(result);
});
router.post("/kondorse", (req, res) => {
    let result = Calculations.kondorse(req.body.inputMatrix, req.body.x, req.body.y)
    res.send(result);
});
router.post("/pair-comparsion", (req, res) => {
    let result = Calculations.pairComparsion(req.body.binaryMatrix, req.body.x, req.body.y)
    res.send(result);
});
router.post("/preference", (req, res) => {
    let result = Calculations.preference(req.body.inputMatrix, req.body.x, req.body.y)
    res.send(result);
});
router.post("/sequentially-comparison", (req, res) => {
    let result = Calculations.sequentiallyComparison(req.body.inputMatrix, req.body.x, req.body.y)
    res.send(result);
});
router.post("/weighing", (req, res) => {
    let result = Calculations.weighing(req.body.inputMatrix, req.body.x, req.body.y)
    res.send(result);
});

export default router;
