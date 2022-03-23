import {
    PairComparsionResult,
    SequentiallyComparisonInputMatrixElement,
    SequentiallyComparisonResult,
    WeighingResult,
    PreferenceResult,
    KondorseResult,
    KemeniSnellaResult,
} from '@src/models/dtm/calculations'

export interface ICalculationsService {
    pairComparsion: (
        binaryMatrix: number[][],
        x: number,
        y: number
    ) => PairComparsionResult
    sequentiallyComparison: (
        inputMatrix: SequentiallyComparisonInputMatrixElement[],
        x: number,
        y: number
    ) => SequentiallyComparisonResult
    weighing: (inputMatrix: number[][], x: number, y: number) => WeighingResult
    preference: (
        inputMatrix: number[][],
        x: number,
        y: number
    ) => PreferenceResult
    kondorse: (inputMatrix: number[][], x: number, y: number) => KondorseResult
    kemeniSnella: (
        inputMatrix: number[][],
        x: number,
        y: number
    ) => KemeniSnellaResult
}
