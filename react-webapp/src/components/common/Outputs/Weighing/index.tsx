import React from 'react'
import styles from './styles.module.scss'

import { WeighingResult } from '../../../../dataTypes/resultTypes'
import { useCalculationRequest } from '../../../../hooks/useCalculationRequest'

interface props {
    setResult: React.Dispatch<React.SetStateAction<{}>>
}

const Weighing: React.FC<props> = ({ setResult }) => {
    const { result, loading, error } =
        useCalculationRequest<WeighingResult>('weighing')

    if (error === '') {
        setResult(result)
    }

    return (
        <div className={styles.container}>
            {!loading && error === '' && (
                <div className={styles.outputField}>
                    <div className={styles.dataContainer}>
                        Сумма оценок экспертов:
                        {' ' + result.sumOfMarks}
                    </div>

                    <div className={styles.dataContainer}>
                        Относительные оценки экспертов:
                        {result.relativeExpertsMarks.map((col, colIndex) => (
                            <div key={col} className={styles.matrixElement}>
                                {'' + (colIndex + 1) + ': ' + col + ' '}
                            </div>
                        ))}
                    </div>

                    <div className={styles.dataContainer}>
                        Искомые веса:
                        {result.weights.map((col, colIndex) => (
                            <div key={col} className={styles.matrixElement}>
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

export default Weighing
