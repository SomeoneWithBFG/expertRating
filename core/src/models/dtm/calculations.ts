export interface PairComparsionResult {
    values: number[],
    sumOfValues: number,
    weights: number[],
    order: string,
}

export interface SequentiallyComparisonInputMatrixElement {
    index: string,
    weight: number,
    resultWeight: number,
}

export interface SequentiallyComparisonResult {
    causedCorrections: string,
    correctedEvaluations: number[],
    sumOfWeights: number,
    weights: number[],
    order: string,
}

export interface WeighingResult {
    sumOfMarks: number,
    relativeExpertsMarks: number[],
    weights: number[],
    order: string,
}

export interface PreferenceResult {
    modMatrix: number[][],
    sumMarks: number[],
    sumOfMarks: number,
    weights: number[],
    order: string,
}

export interface KondorseResult {
    modMatrix: number[][],
    best: number,
}

export interface KemeniSnellaResult {
    binaryMatrixArray: number[],
    looseMatrix: number[][],
    order: string,
}
