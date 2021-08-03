export interface PairComparsionResult {
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
    causedCorrections: string
    correctedEvaluations: number[]
    sumOfWeights: number
    weights: number[]
    order: string
}

export interface WeighingResult {
    sumOfMarks: number
    relativeExpertsMarks: number[]
    weights: number[]
    order: string
}

export interface PreferenceResult {
    modMatrix: number[][]
    sumMarks: number[]
    sumOfMarks: number
    weights: number[]
    order: string
}

export interface KondorseResult {
    modMatrix: number[][]
    best: number
}

export interface KemeniSnellaResult {
    binaryMatrixArray: number[][][]
    looseMatrix: number[][]
    order: string
}

export interface SavedResult {
    method: string,
    inputMatrix: string,
    x: number,
    y: number,
    user: {
        id: string,
        createdAt: string,
        editedAt: string,
        name: string,
        role: number
    },
    pairComparsionResult: null | {
        createdAt: string,
        editedAt: string,
        id: string,
        order: string,
        sumOfValues: number,
        values: string,
        weights: string,
    },
    sequentiallyComparisonResult: null | {
        causedCorrections: string,
        correctedEvaluations: string,
        sumOfWeights: number,
        weights: string,
        order: string,
        id: string
        createdAt: string,
        editedAt: string
    },
    weighingResult: null | {
        sumOfMarks: number,
        relativeExpertsMarks: string,
        weights: string,
        order: string,
        id: string,
        createdAt: string,
        editedAt: string
    },
    preferenceResult: null | {
        modMatrix: string,
        sumMarks: string,
        sumOfMarks: number,
        weights: string,
        order: string,
        id: string,
        createdAt: string,
        editedAt: string
    },
    kondorseResult: null | {
        modMatrix: string,
        best: number,
        id: string,
        createdAt: string,
        editedAt: string
    },
    kemeniSnellaResult: null | {
        binaryMatrixArray: string,
        looseMatrix: string,
        order: string,
        id: string,
        createdAt: string,
        editedAt: string
    },
    id: string,
    createdAt: string,
    editedAt: string
}
