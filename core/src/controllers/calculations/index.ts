import { Request, Response } from "express";

import { ICalculations } from './interfaces'
import CalculationsService from "@services/calculations"

class Calculations implements ICalculations {
    pairComparsion (req: Request, res: Response) {
        const result = CalculationsService.pairComparsion(req.body.binaryMatrix, req.body.x, req.body.y);
        res.json(result);
    }
    sequentiallyComparison (req: Request, res: Response) {
        const result = CalculationsService.sequentiallyComparison(req.body.inputMatrix, req.body.x, req.body.y);
        res.json(result);
    }
    weighing (req: Request, res: Response) {
        const result = CalculationsService.weighing(req.body.inputMatrix, req.body.x, req.body.y);
        return res.json(result);
    }
    preference (req: Request, res: Response) {
        const result = CalculationsService.preference(req.body.inputMatrix, req.body.x, req.body.y);
        return res.json(result);
    }
    kondorse (req: Request, res: Response) {
        const result = CalculationsService.kondorse(req.body.inputMatrix, req.body.x, req.body.y)
        return res.json(result);
    }
    kemeniSnella (req: Request, res: Response) {
        const result = CalculationsService.kemeniSnella(req.body.inputMatrix, req.body.x, req.body.y)
        return res.json(result);
    }
}

export default new Calculations();
