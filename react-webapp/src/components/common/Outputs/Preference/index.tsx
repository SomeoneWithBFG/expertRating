import React from 'react'
import styles from './styles.module.scss'

import { PreferenceResult } from '../mocked'

const data = PreferenceResult

const Preference: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.outputField}>
                <div className={styles.dataContainer}>
                    Модифицированная матрица предпочтения:
                    {data.result.modMatrix.map((row, i) => (
                        <div key={row[i]} className={styles.row}>
                            {row.map((col) => (
                                <div key={col} className={styles.matrixElement}>
                                    {col + ' '}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                <div className={styles.dataContainer}>
                    Суммарные оценки предпочтения:
                    <div className={styles.row}>
                        {data.result.sumMarks.map((col) => (
                            <div key={col} className={styles.matrixElement}>
                                {col + ' '}
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.dataContainer}>
                    Сумма всех оценок:
                    {' ' + data.result.sumOfMarks}
                </div>

                <div className={styles.dataContainer}>
                    Искомые веса целей:
                    {data.result.weights.map((col, i) => (
                        <div key={col} className={styles.matrixElement}>
                            {'' + (i + 1) + ': ' + col + ' '}
                        </div>
                    ))}
                </div>

                <div className={styles.dataContainer}>
                    Порядок предпочтения целей:
                    {' ' + data.result.order}
                </div>
            </div>
        </div>
    )
}

export default Preference
