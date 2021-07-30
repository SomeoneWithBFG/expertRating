import axios from 'axios'

import * as ICalculationResults from '../dataTypes/resultTypes'


export function kemeniSnella(inputMatrix: number[][], x: number, y: number) {
    return axios
        .post<{
            result: ICalculationResults.KemeniSnellaResult
            savedResult?: any
        }>('/calculations/kemeni-snella', {
            inputMatrix,
            x,
            y,
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

export function kondorse(inputMatrix: number[][], x: number, y: number) {
    return axios
        .post<{
            result: ICalculationResults.KondorseResult
            savedResult?: any
        }>('/calculations/kondorse', {
            inputMatrix,
            x,
            y,
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

export function pairComparsion(inputMatrix: number[][], x: number, y: number) {
    return axios
        .post<{
            result: ICalculationResults.PairComparsionResult
            savedResult?: any
        }>('/calculations/pair-comparsion', {
            inputMatrix,
            x,
            y,
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

export function preference(inputMatrix: number[][], x: number, y: number) {
    return axios
        .post<{
            result: ICalculationResults.PreferenceResult
            savedResult?: any
        }>('/calculations/preference', {
            inputMatrix,
            x,
            y,
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

export function sequentiallyComparison(
    inputMatrix: ICalculationResults.SequentiallyComparisonInputMatrixElement[],
    x: number,
    y: number
) {
    return axios
        .post<{
            result: ICalculationResults.SequentiallyComparisonResult
            savedResult?: any
        }>('/calculations/sequentially-comparison', {
            inputMatrix,
            x,
            y,
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

export function weighing(inputMatrix: number[][], x: number, y: number) {
    return axios
    .post<{ result: ICalculationResults.WeighingResult; savedResult?: any }>(
        '/calculations/weighing',
        {
            inputMatrix,
            x,
            y,
        }
    )
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

export function universal(inputMatrix: number[][], x: number, y: number, endpoint: string) {
    return axios
    .post<{ result: ICalculationResults.WeighingResult; savedResult?: any }>(
        '/calculations/' + endpoint,
        {
            inputMatrix,
            x,
            y,
        }
    )
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
