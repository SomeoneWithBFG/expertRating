import React, { useEffect, useState } from 'react'

import { useAppSelector } from '../../../../redux/hooks'

import { kemeniSnella } from '../../../../api/calculations'

import styles from './styles.module.scss'

import { KemeniSnellaResult } from '../../../../dataTypes/resultTypes'

const KemeniSnella: React.FC = () => {
    const state = useAppSelector((state) => state)

    const [data, setData] = useState({
        result: {} as KemeniSnellaResult,
    })

    const [loading, setLoading] = useState(true)

    const [error, setError] = useState('')

    useEffect(() => {
        kemeniSnella(
            state.calculations.commonMatrix,
            state.calculations.x,
            state.calculations.y
        )
            .then((response) => {
                if (response.type === 'error') {
                    console.log(response.payload)
                    setError(response.payload)
                } else {
                    setData(response.payload)
                }
                setLoading(false)
            })
            .catch((ex) => {
                console.log(ex)
                setError('Something went wrong')
                setLoading(false)
            })
    })

    return (
        <div className={styles.container}>
            {!loading && error === '' && (
                <div className={styles.outputField}>
                    <div className={styles.dataContainer}>
                        {data.result.binaryMatrixArray.map((matrix, j) => (
                            <>
                                {'Эксперт ' + (j + 1) + ':'}
                                {matrix.map((row, i) => (
                                    <div key={row[i]} className={styles.row}>
                                        {row.map((col, k) => (
                                            <div
                                                key={'' + i + j + k + col}
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
                        {data.result.looseMatrix.map((row, i) => (
                            <div key={row[i]} className={styles.row}>
                                {row.map((col, j) => (
                                    <div
                                        key={'' + i + j + col}
                                        className={styles.matrixElement}
                                    >
                                        {col}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                    <div className={styles.dataContainer}>
                        Результат:
                        <div>{data.result.order}</div>
                    </div>
                </div>
            )}
            {error && <p className="error">{error}</p>}
        </div>
    )
}

export default KemeniSnella
