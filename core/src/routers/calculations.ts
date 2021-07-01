import express, { Request, Response, Router } from "express";
import Calculations from "../usecases/calculations"

const router: Router = express.Router();

router.post("/kemeniSnella", (req, res) => {
    var result = Calculations.kemeniSnella(req.body.inputMatrix, req.body.x, req.body.y)
    res.send(result);
});
router.post("/kondorse", (req, res) => {
    var result = Calculations.kondorse(req.body.inputMatrix, req.body.x, req.body.y)
    res.send(result);
});
router.post("/pairComparsion", (req, res) => {
    var result = Calculations.pairComparsion(Array.of(req.body.binaryMatrix), req.body.x, req.body.y)
    console.log(req.body, 1)
    console.log(result)
    res.send(result);
});
router.post("/preference", (req, res) => {
    var result = Calculations.preference(req.body.inputMatrix, req.body.x, req.body.y)
    res.send(result);
});
router.post("/sequentiallyComparison", (req, res) => {
    var result = Calculations.sequentiallyComparison(req.body.inputMatrix, req.body.x, req.body.y)
    res.send(result);
});
router.post("/weighing", (req, res) => {
    var result = Calculations.weighing(req.body.inputMatrix, req.body.x, req.body.y)
    res.send(result);
});

export default router;
