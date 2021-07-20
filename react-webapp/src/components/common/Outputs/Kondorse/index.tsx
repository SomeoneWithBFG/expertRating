import React from 'react'
import styles from './styles.module.scss'

import { KondorseResult } from '../mocked'

const data = KondorseResult

const Kondorse: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.outputField}>
                <div className={styles.dataContainer}>
                    Матрица оценок:
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
                    Альтернатива Кондорсе: {data.result.best}
                </div>
            </div>
        </div>
    )
}

export default Kondorse
