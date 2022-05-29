import React from 'react'
import { WeighingResult } from '../../../../../dataTypes/resultTypes'
import styles from './styles.module.scss'

const WeighingH = (result: WeighingResult) => {

    return (
        <div className={styles.container}>
            <div className={styles.outputField}>
                <div className={styles.dataContainer}>
                    Сумма оценок экспертов: {result.sumOfMarks}
                </div>

                <div className={styles.dataContainer}>
                    Относительные оценки экспертов:
                    {result.relativeExpertsMarks.map((col, colIndex) => (
                        <div
                            key={colIndex}
                            className={styles.matrixElement}
                        >
                            {colIndex + 1 + ': ' + col + ' '}
                        </div>
                    ))}
                </div>

                <div className={styles.dataContainer}>
                    Искомые веса:
                    {result.weights.map((col, colIndex) => (
                        <div
                            key={colIndex}
                            className={styles.matrixElement}
                        >
                            {colIndex + 1 + ': ' + col + ' '}
                        </div>
                    ))}
                </div>

                <div className={styles.dataContainer}>
                    Порядок предпочтения целей: {result.order}
                </div>
            </div>
        </div>
    )
}

export default WeighingH
