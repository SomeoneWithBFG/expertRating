import { useState, useEffect } from 'react'

import { useAppSelector } from '../redux/hooks'

import * as CalculationsAPI from '../api/calculations'

export const useCalculationRequest = <T>(endpoint: string) => {
    const state = useAppSelector((state) => state)

    const [result, setResult] = useState<T>({} as T)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string>('')

    const calculate = () => {
        CalculationsAPI.universal(
            endpoint === CalculationsAPI.endpoints.sequentiallyComparison
                ? state.calculations.seqCompMatrix
                : state.calculations.commonMatrix,
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

    useEffect(() => {
        calculate()
    }, [])

    return { result, loading, error }
}
