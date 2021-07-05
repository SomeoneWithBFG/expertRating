import { ICalculations } from './interfaces'
import {
    SequentiallyComparisonInputMatrixElement,
    SequentiallyComparisonResult,
    WeighingResult,
    PreferenceResult,
    KemeniSnellaResult,
} from "@src/models/dtm/calculations"

import CalculationsService from "../../services/calculations"

class Calculations implements ICalculations {
    pairComparsion (binaryMatrix: number[][], x: number, y: number) {
        let result = CalculationsService.pairComparsion(binaryMatrix, x, y);
        return result;
    }
    sequentiallyComparison (inputMatrix: SequentiallyComparisonInputMatrixElement[], x: number, y: number) {
        let result = CalculationsService.sequentiallyComparison(inputMatrix, x, y);
        return result;
    }
    weighing (inputMatrix: number[][], x: number, y: number) {
        let result = CalculationsService.weighing(inputMatrix, x, y);
        return result;
    }
    preference (inputMatrix: number[][], x: number, y: number) {
        let result = CalculationsService.preference(inputMatrix, x, y);
        return result;
    }
    kondorse (inputMatrix: number[][], x: number, y: number) {
        let result = CalculationsService.kondorse(inputMatrix, x, y)
        return result;
    }
    kemeniSnella (inputMatrix: number[][], numOfProjects: number, numOfExperts: number) {
        let result = CalculationsService.kemeniSnella(inputMatrix, numOfProjects, numOfExperts)
        return result;
    }
}

export default new Calculations();
