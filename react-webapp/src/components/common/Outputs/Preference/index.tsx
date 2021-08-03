import React from 'react'
import styles from './styles.module.scss'

import { useCalculationRequest } from '../../../../hooks/useCalculationRequest'
import { endpoints } from '../../../../api/calculations'

import { PreferenceResult } from '../../../../dataTypes/resultTypes'

interface props {
    setResult: React.Dispatch<React.SetStateAction<{}>>
}

const Preference: React.FC<props> = ({ setResult }) => {
    const { result, loading, error } = useCalculationRequest<PreferenceResult>(
        endpoints.preference
    )

    if (!error) {
        setResult(result)
    }

    return (
        <div className={styles.container}>
            {!loading && !error && (
                <div className={styles.outputField}>
                    <div className={styles.dataContainer}>
                        Модифицированная матрица предпочтения:
                        {result.modMatrix.map((row, rowIndex) => (
                            <div key={rowIndex} className={styles.row}>
                                {row.map((col, colIndex) => (
                                    <div
                                        key={colIndex}
                                        className={styles.matrixElement}
                                    >
                                        {col + ' '}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                    <div className={styles.dataContainer}>
                        Суммарные оценки предпочтения:
                        <div className={styles.row}>
                            {result.sumMarks.map((col, colIndex) => (
                                <div
                                    key={colIndex}
                                    className={styles.matrixElement}
                                >
                                    {col + ' '}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.dataContainer}>
                        Сумма всех оценок: {result.sumOfMarks}
                    </div>

                    <div className={styles.dataContainer}>
                        Искомые веса целей:
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
                        Порядок предпочтения целей: {result.order}
                    </div>
                </div>
            )}
            {error && <p className="error">{error}</p>}
        </div>
    )
}

export default Preference
