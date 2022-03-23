export interface PairComparsionResult {
    method: 'PairComparsionResult'
    values: number[]
    sumOfValues: number
    weights: number[]
    order: string
}

export interface SequentiallyComparisonInputMatrixElement {
    index: string
    weight: number
    resultWeight: number
}
export interface SequentiallyComparisonResult {
    method: 'SequentiallyComparisonResult'
    causedCorrections: string
    correctedEvaluations: number[]
    sumOfWeights: number
    weights: number[]
    order: string
}

export interface WeighingResult {
    method: 'WeighingResult'
    sumOfMarks: number
    relativeExpertsMarks: number[]
    weights: number[]
    order: string
}

export interface PreferenceResult {
    method: 'PreferenceResult'
    modMatrix: number[][]
    sumMarks: number[]
    sumOfMarks: number
    weights: number[]
    order: string
}

export interface KondorseResult {
    method: 'KondorseResult'
    modMatrix: number[][]
    best: number
}

export interface KemeniSnellaResult {
    method: 'KemeniSnellaResult'
    binaryMatrixArray: number[]
    looseMatrix: number[][]
    order: string
}
