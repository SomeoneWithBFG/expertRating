import React from 'react'
import { SequentiallyComparisonResult } from '../../../../../dataTypes/resultTypes'
import styles from './styles.module.scss'

const SequentiallyComparisonH = (result: SequentiallyComparisonResult) => {

    return (
        <div className={styles.container}>
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
        </div>
    )
}

export default SequentiallyComparisonH
