import React from 'react'
import styles from './styles.module.scss'

import { PreferenceResult } from '../../../../dataTypes/resultTypes'
import { useCalculationRequest } from '../../../../hooks/useCalculationRequest'

interface props {
    setResult: React.Dispatch<React.SetStateAction<{}>>
}

const Preference: React.FC<props> = ({ setResult }) => {
    const { result, loading, error } =
        useCalculationRequest<PreferenceResult>('preference')

    if (error === '') {
        setResult(result)
    }

    return (
        <div className={styles.container}>
            {!loading && error === '' && (
                <div className={styles.outputField}>
                    <div className={styles.dataContainer}>
                        Модифицированная матрица предпочтения:
                        {result.modMatrix.map((row, rowIndex) => (
                            <div key={row[rowIndex]} className={styles.row}>
                                {row.map((col) => (
                                    <div
                                        key={col}
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
                            {result.sumMarks.map((col) => (
                                <div key={col} className={styles.matrixElement}>
                                    {col + ' '}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.dataContainer}>
                        Сумма всех оценок:
                        {' ' + result.sumOfMarks}
                    </div>

                    <div className={styles.dataContainer}>
                        Искомые веса целей:
                        {result.weights.map((col, colIndex) => (
                            <div key={col} className={styles.matrixElement}>
                                {'' + (colIndex + 1) + ': ' + col + ' '}
                            </div>
                        ))}
                    </div>

                    <div className={styles.dataContainer}>
                        Порядок предпочтения целей:
                        {' ' + result.order}
                    </div>
                </div>
            )}
            {error && <p className="error">{error}</p>}
        </div>
    )
}

export default Preference
