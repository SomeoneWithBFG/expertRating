export interface PairComparsionResult {
    values: number[]
    sumOfValues: number
    weights: number[]
    order: string
}

export function isPairComparsionResult(
    object: any
): object is PairComparsionResult {
    return "values" in object
}

export interface SequentiallyComparisonInputMatrixElement {
    index: string
    weight: number
    resultWeight: number
}
export interface SequentiallyComparisonResult {
    causedCorrections: string
    correctedEvaluations: number[]
    sumOfWeights: number
    weights: number[]
    order: string
}

export function isSequentiallyComparisonResult(
    object: any
): object is SequentiallyComparisonResult {
    return "causedCorrections" in object
}

export interface WeighingResult {
    sumOfMarks: number
    relativeExpertsMarks: number[]
    weights: number[]
    order: string
}

export function isWeighingResult(object: any): object is WeighingResult {
    return "relativeExpertsMarks" in object
}

export interface PreferenceResult {
    modMatrix: number[][]
    sumMarks: number[]
    sumOfMarks: number
    weights: number[]
    order: string
}

export function isPreferenceResult(object: any): object is PreferenceResult {
    return "sumMarks" in object
}

export interface KondorseResult {
    modMatrix: number[][]
    best: number
}

export function isKondorseResult(object: any): object is KondorseResult {
    return "best" in object
}

export interface KemeniSnellaResult {
    binaryMatrixArray: number[]
    looseMatrix: number[][]
    order: string
}

export function isKemeniSnellaResult(
    object: any
): object is KemeniSnellaResult {
    return 'looseMatrix' in object;
}
