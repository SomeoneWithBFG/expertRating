import React from 'react'
import styles from './styles.module.scss'

import { WeighingResult } from '../mocked'

const data = WeighingResult

const Weighing: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.outputField}>
                <div className={styles.dataContainer}>
                    Сумма оценок экспертов:
                    {' ' + data.result.sumOfMarks}
                </div>

                <div className={styles.dataContainer}>
                    Относительные оценки экспертов:
                    {data.result.relativeExpertsMarks.map((col, i) => (
                        <div key={col} className={styles.matrixElement}>
                            {'' + (i + 1) + ': ' + col + ' '}
                        </div>
                    ))}
                </div>

                <div className={styles.dataContainer}>
                    Искомые веса:
                    {data.result.weights.map((col, i) => (
                        <div key={col} className={styles.matrixElement}>
                            {'' + (i + 1) + ': ' + col + ' '}
                        </div>
                    ))}
                </div>

                <div className={styles.dataContainer}>
                    Порядок предпочтения целей: {data.result.order}
                </div>
            </div>
        </div>
    )
}

export default Weighing
