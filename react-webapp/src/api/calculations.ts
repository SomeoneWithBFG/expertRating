import axios from 'axios'

import * as ICalculationResults from '../dataTypes/resultTypes'

export const endpoints = {
    kemeniSnella: 'kemeni-snella',
    kondorse: 'kondorse',
    pairComparsion: 'pair-comparison',
    preference: 'preference',
    sequentiallyComparison: 'sequentially-comparison',
    weighing: 'weighing',
}

export function universal(
    inputMatrix:
        | number[][]
        | ICalculationResults.SequentiallyComparisonInputMatrixElement[],
    x: number,
    y: number,
    endpoint: string
) {
    return axios
        .post<{
            result:
                | ICalculationResults.PairComparsionResult
                | ICalculationResults.SequentiallyComparisonResult
                | ICalculationResults.WeighingResult
                | ICalculationResults.PreferenceResult
                | ICalculationResults.KondorseResult
                | ICalculationResults.KemeniSnellaResult
            savedResult?: ICalculationResults.SavedResult
        }>('/calculations/' + endpoint, {
            inputMatrix,
            x,
            y,
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then((response) => {
            if (response.status === 404) {
                return { type: 'error', payload: response.data }
            }
            return { type: 'ok', payload: response.data }
        })
        .catch((err) => {
            return { type: 'error', payload: JSON.parse(err) }
        })
}
