import { useState, useEffect } from 'react'

import { useAppSelector } from '../redux/hooks'

import * as CalculationsAPI from '../api/calculations'

export const useCalculationRequest = <T>(endpoint: string) => {
    const state = useAppSelector((state) => state)

    const [result, setResult] = useState<T>({} as T)

    const [loading, setLoading] = useState<boolean>(true)

    const [error, setError] = useState<string>('')

    const calculate = () => {
        if (endpoint === 'sequentially-comparsion') {
            CalculationsAPI.sequentiallyComparison(
                state.calculations.seqCompMatrix,
                state.calculations.x,
                state.calculations.y
            )
                .then((response) => {
                    if (response.type === 'error') {
                        setError(response.payload)
                    } else {
                        setResult(response.payload.result)
                    }
                    setLoading(false)
                })
                .catch((ex) => {
                    setError('Something went wrong')
                    setLoading(false)
                })
        } else {
            CalculationsAPI.universal(
                state.calculations.commonMatrix,
                state.calculations.x,
                state.calculations.y,
                endpoint
            )
                .then((response) => {
                    if (response.type === 'error') {
                        setError(response.payload)
                    } else {
                        setResult(response.payload.result)
                    }
                    setLoading(false)
                })
                .catch((ex) => {
                    setError('Something went wrong')
                    setLoading(false)
                })
        }
    }
    useEffect(() => {
        calculate()
    }, [])

    return { result, loading, error }
}
