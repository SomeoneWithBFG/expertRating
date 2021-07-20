import React from 'react'
import styles from './styles.module.scss'

import { KemeniSnellaResult } from '../mocked'

const data = KemeniSnellaResult

const KemeniSnella: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.outputField}>
                <div className={styles.dataContainer}>
                    {data.result.binaryMatrixArray.map((matrix, j) => (
                        <>
                            {'Эксперт ' + (j + 1) + ':'}
                            {matrix.map((row, i) => (
                                <div key={row[i]} className={styles.row}>
                                    {row.map((col) => (
                                        <div
                                            key={col}
                                            className={styles.matrixElement}
                                        >
                                            {col}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </>
                    ))}
                </div>

                <div className={styles.dataContainer}>
                    Матрица потерь:
                    {data.result.looseMatrix.map((col) => (
                        <div className={styles.matrixElement}>{col + '  '}</div>
                    ))}
                </div>

                <div className={styles.dataContainer}>
                    Результат:
                    <div>{data.result.order}</div>
                </div>
            </div>
        </div>
    )
}

export default KemeniSnella
