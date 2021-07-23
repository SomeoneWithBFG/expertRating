import React from 'react'
import styles from './styles.module.scss'

import { PairComparsionResult } from '../mocked'

const data = PairComparsionResult

const PairComparsion: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.outputField}>
                <div className={styles.dataContainer}>
                    Цена каждой цели:
                    {data.result.values.map((col, i) => (
                        <div key={col} className={styles.matrixElement}>
                            {'' + (i + 1) + ': ' + col + ' '}
                        </div>
                    ))}
                </div>

                <div className={styles.dataContainer}>
                    Сумма цен:
                    {' ' + data.result.sumOfValues}
                </div>

                <div className={styles.dataContainer}>
                    Исковые веса целей:
                    {data.result.weights.map((col, i) => (
                        <div key={col} className={styles.matrixElement}>
                            {'' + (i + 1) + ': ' + col + ' '}
                        </div>
                    ))}
                </div>

                <div className={styles.dataContainer}>
                    Порядок предпочтения целей:
                    {' | ' + data.result.order}
                </div>
            </div>
        </div>
    )
}

export default PairComparsion
