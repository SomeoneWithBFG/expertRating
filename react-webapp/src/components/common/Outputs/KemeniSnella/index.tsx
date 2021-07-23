import React, { useEffect, useState } from 'react'

import { useAppSelector } from '../../../../redux/hooks'

import axios from 'axios'

import styles from './styles.module.scss'

import { KemeniSnellaResult } from '../resultTypes'

const KemeniSnella: React.FC = () => {
    const state = useAppSelector((state) => state)

    const [data, setData] = useState({
        result: {} as KemeniSnellaResult,
    })

    const [loading, setLoading] = useState(true)

    const [error, setError] = useState('')

    useEffect(() => {
        axios
            .post<{ result: KemeniSnellaResult; savedResult?: any }>(
                '/calculations/kemeni-snella',
                {
                    inputMatrix: state.calculations.commonMatrix,
                    x: state.calculations.x,
                    y: state.calculations.y,
                }
            )
            .then((response) => {
                setData({ result: response.data.result })
                setLoading(false)
            })
            .catch((ex) => {
                const error =
                    ex.response.status === 404
                        ? 'Resource Not found'
                        : 'An unexpected error has occurred'
                setError(error)
                setLoading(false)
            })
    }, [])

    return (
        <div className={styles.container}>
            {!loading && (
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
