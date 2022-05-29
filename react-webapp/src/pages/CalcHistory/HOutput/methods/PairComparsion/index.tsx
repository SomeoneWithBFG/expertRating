import React from 'react'
import { PairComparsionResult } from '../../../../../dataTypes/resultTypes'
import styles from './styles.module.scss'

const PairComparsionH = (result: PairComparsionResult) => {
    return (
        <div className={styles.container}>
            <div className={styles.outputField}>
                <div className={styles.dataContainer}>
                    Цена каждой цели:
                    {result.values.map((col, colIndex) => (
                        <div
                            key={colIndex}
                            className={styles.matrixElement}
                        >
                            {colIndex + 1 + ': ' + col + ' '}
                        </div>
                    ))}
                </div>

                <div className={styles.dataContainer}>
                    Сумма цен: {result.sumOfValues}
                </div>

                <div className={styles.dataContainer}>
                    Исковые веса целей:
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
                    Порядок предпочтения целей:
                    {' | ' + result.order}
                </div>
            </div>
        </div>
    )
}

export default PairComparsionH
