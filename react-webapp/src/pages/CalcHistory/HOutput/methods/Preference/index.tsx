import React from 'react'
import { PreferenceResult } from '../../../../../dataTypes/resultTypes'
import styles from './styles.module.scss'


const PreferenceH = (result: PreferenceResult) => {
    return (
        <div className={styles.container}>
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
        </div>
    )
}

export default PreferenceH
