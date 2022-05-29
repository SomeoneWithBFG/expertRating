import React from 'react'
import { KondorseResult } from '../../../../../dataTypes/resultTypes'
import styles from './styles.module.scss'


const KondorseH = (data: KondorseResult) => {
    return (
        <div className={styles.container}>
            <div className={styles.outputField}>
                <div className={styles.dataContainer}>
                    Матрица оценок:
                    {data.modMatrix.map((row, rowIndex) => (
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
                    Альтернатива Кондорсе: {data.best}
                </div>
            </div>
        </div>
    )
}

export default KondorseH
