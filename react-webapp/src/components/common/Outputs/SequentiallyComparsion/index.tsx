import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'

import { useAppSelector } from '../../../../redux/hooks'

import { SequentiallyComparisonResult } from '../resultTypes'

const SequentiallyComparison: React.FC = () => {
    const state = useAppSelector((state) => state)

    const [data, setData] = useState({
        result: {} as SequentiallyComparisonResult,
    })

    const [loading, setLoading] = useState(true)

    const [error, setError] = useState('')

    useEffect(() => {
        axios
            .post<{ result: SequentiallyComparisonResult; savedResult?: any }>(
                '/calculations/sequentially-comparison',
                {
                    inputMatrix: state.calculations.seqCompMatrix,
                    x: state.calculations.y,
                    y: state.calculations.y,
                }
            )
            .then((response) => {
                console.log(response)
                setData({ result: response.data.result })
                setLoading(false)
            })
            .catch((ex) => {
                const error =
                    ex.response.status === 404
                        ? 'Resource Not found'
                        : 'An unexpected error has occurred'
                setError(error)
                setLoading(false)
            })
    }, [])

    return (
        <div className={styles.container}>
            {!loading && (
                <div className={styles.outputField}>
                    <div className={styles.dataContainer}>
                        Тройки целей, вызвавшие коррекцию весов:
                        <p>{data.result.causedCorrections}</p>
                    </div>

                    <div className={styles.dataContainer}>
                        Скорректированные оценки:
                        {data.result.correctedEvaluations.map((col, i) => (
                            <div key={col} className={styles.matrixElement}>
                                {'' + (i + 1) + ': ' + col + ' '}
                            </div>
                        ))}
                    </div>

                    <div className={styles.dataContainer}>
                        Веса целей:
                        {data.result.weights.map((col, i) => (
                            <div key={col} className={styles.matrixElement}>
                                {'' + (i + 1) + ': ' + col + ' '}
                            </div>
                        ))}
                    </div>

                    <div className={styles.dataContainer}>
                        Сумма весов целей: {data.result.sumOfWeights}
                    </div>

                    <div className={styles.dataContainer}>
                        Порядок предпочтения целей: {data.result.order}
                    </div>
                </div>
            )}
            {error && <p className="error">{error}</p>}
        </div>
    )
}

export default SequentiallyComparison
