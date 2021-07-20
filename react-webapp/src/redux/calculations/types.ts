export interface sequentiallyComparisonMatrixElement {
    index: string
    weight: number
    resultWeight: number
}

export interface CalculationState {
    type: string
    x: number
    y: number
    commonMatrix: number[][]
    seqCompMatrix: sequentiallyComparisonMatrixElement[]
}

export type DispatchType = (args: CalculationAction) => CalculationAction

export interface CalculationAction {
    type: string
    data: any
}
