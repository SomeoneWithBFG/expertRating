import { ICalculations } from './interfaces'
import CalculationsService from "../../services/calculations"

class Calculations implements ICalculations {
    pairComparsion (req: any, res: any) {
        if (req && req.body) {
            let result = CalculationsService.pairComparsion(req.body.binaryMatrix, req.body.x, req.body.y);
            return res.send(result);
        }
        else
            return res.send("no data");
    }
    sequentiallyComparison (req: any, res: any) {
        if (req && req.body) {
            let result = CalculationsService.sequentiallyComparison(req.body.inputMatrix, req.body.x, req.body.y);
            return res.send(result);
        }
        else
            return res.send("no data");
    }
    weighing (req: any, res: any) {
        if (req && req.body) {
            let result = CalculationsService.weighing(req.body.inputMatrix, req.body.x, req.body.y);
            return res.send(result);
        }
        else
            return res.send("no data");
    }
    preference (req: any, res: any) {
        if (req && req.body) {
            let result = CalculationsService.preference(req.body.inputMatrix, req.body.x, req.body.y);
            return res.send(result);
        }
        else
            return res.send("no data");
    }
    kondorse (req: any, res: any) {
        if (req && req.body) {
            let result = CalculationsService.kondorse(req.body.inputMatrix, req.body.x, req.body.y)
            return res.send(result);
        }
        else
            return res.send("no data");
    }
    kemeniSnella (req: any, res: any) {
        if (req && req.body) {
            let result = CalculationsService.kemeniSnella(req.body.inputMatrix, req.body.x, req.body.y)
            return res.send(result);
        }
        else
            return res.send("no data");
    }
}

export default new Calculations();
