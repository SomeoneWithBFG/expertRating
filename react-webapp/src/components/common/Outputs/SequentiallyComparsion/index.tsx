import React from 'react'
import styles from './styles.module.scss'

import { useCalculationRequest } from '../../../../hooks/useCalculationRequest'
import { endpoints } from '../../../../api/calculations'

import { SequentiallyComparisonResult } from '../../../../dataTypes/resultTypes'

interface props {
    setResult: React.Dispatch<React.SetStateAction<{}>>
}

const SequentiallyComparison: React.FC<props> = ({ setResult }) => {
    const { result, loading, error } =
        useCalculationRequest<SequentiallyComparisonResult>(
            endpoints.sequentiallyComparison
        )

    if (!error) {
        setResult(result)
    }

    return (
        <div className={styles.container}>
            {!loading && !error && (
                <div className={styles.outputField}>
                    <div className={styles.dataContainer}>
                        Тройки целей, вызвавшие коррекцию весов:
                        <p>{result.causedCorrections}</p>
                    </div>

                    <div className={styles.dataContainer}>
                        Скорректированные оценки:
                        {result.correctedEvaluations.map((col, colIndex) => (
                            <div
                                key={colIndex}
                                className={styles.matrixElement}
                            >
                                {colIndex + 1 + ': ' + col + ' '}
                            </div>
                        ))}
                    </div>

                    <div className={styles.dataContainer}>
                        Веса целей:
                        {result.weights.map((col, colIndex) => (
                            <div
                                key={colIndex}
                                className={styles.matrixElement}
                            >
                                {'' + (colIndex + 1) + ': ' + col + ' '}
                            </div>
                        ))}
                    </div>

                    <div className={styles.dataContainer}>
                        Сумма весов целей: {result.sumOfWeights}
                    </div>

                    <div className={styles.dataContainer}>
                        Порядок предпочтения целей: {result.order}
                    </div>
                </div>
            )}
            {error && <p className="error">{error}</p>}
        </div>
    )
}

export default SequentiallyComparison
