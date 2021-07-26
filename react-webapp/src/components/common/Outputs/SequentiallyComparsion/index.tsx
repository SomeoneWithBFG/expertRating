import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'

import { useAppSelector } from '../../../../redux/hooks'

import { sequentiallyComparison } from '../../../../api/calculations'

import { SequentiallyComparisonResult } from '../../../../dataTypes/resultTypes'

const SequentiallyComparison: React.FC = () => {
    const state = useAppSelector((state) => state)

    const [data, setData] = useState({
        result: {} as SequentiallyComparisonResult,
    })

    const [loading, setLoading] = useState(true)

    const [error, setError] = useState('')

    useEffect(() => {
        sequentiallyComparison(
            state.calculations.seqCompMatrix,
            state.calculations.y,
            state.calculations.y
        )
            .then((response) => {
                if (response.type === 'error') {
                    setError(response.payload)
                } else {
                    setData(response.payload)
                }
                setLoading(false)
            })
            .catch((ex) => {
                setError('Something went wrong')
                setLoading(false)
            })
    })

    return (
        <div className={styles.container}>
            {!loading && error === '' && (
                <div className={styles.outputField}>
                    <div className={styles.dataContainer}>
                        Тройки целей, вызвавшие коррекцию весов:
                        <p>{data.result.causedCorrections}</p>
                    </div>

                    <div className={styles.dataContainer}>
                        Скорректированные оценки:
                        {data.result.correctedEvaluations.map((col, colIndex) => (
                            <div key={col} className={styles.matrixElement}>
                                {'' + (colIndex + 1) + ': ' + col + ' '}
                            </div>
                        ))}
                    </div>

                    <div className={styles.dataContainer}>
                        Веса целей:
                        {data.result.weights.map((col, colIndex) => (
                            <div key={col} className={styles.matrixElement}>
                                {'' + (colIndex + 1) + ': ' + col + ' '}
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
