import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'

import { useAppSelector } from '../../../../redux/hooks'

import { PreferenceResult } from '../resultTypes'

const Preference: React.FC = () => {
    const state = useAppSelector((state) => state)

    const [data, setData] = useState({
        result: {} as PreferenceResult,
    })

    const [loading, setLoading] = useState(true)

    const [error, setError] = useState('')

    useEffect(() => {
        axios
            .post<{ result: PreferenceResult; savedResult?: any }>(
                '/calculations/preference',
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
                        Модифицированная матрица предпочтения:
                        {data.result.modMatrix.map((row, i) => (
                            <div key={row[i]} className={styles.row}>
                                {row.map((col) => (
                                    <div
                                        key={col}
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
            )}
            {error && <p className="error">{error}</p>}
        </div>
    )
}

export default Preference
