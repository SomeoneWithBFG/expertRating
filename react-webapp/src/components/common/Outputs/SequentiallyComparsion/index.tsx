import React from 'react'
import styles from './styles.module.scss'

import { SequentiallyComparisonResult } from '../mocked'

const data = SequentiallyComparisonResult

const SequentiallyComparison: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.outputField}>
                <div className={styles.dataContainer}>
                    Тройки целей, вызвавшие коррекцию весов:
                    {data.result.causedCorrections}
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
        </div>
    )
}

export default SequentiallyComparison
