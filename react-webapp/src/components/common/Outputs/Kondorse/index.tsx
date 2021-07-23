import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { useAppSelector } from '../../../../redux/hooks'

import { KondorseResult } from '../resultTypes'

import styles from './styles.module.scss'

const Kondorse: React.FC = () => {
    const state = useAppSelector((state) => state)

    const [data, setData] = useState({
        result: {} as KondorseResult,
    })

    const [loading, setLoading] = useState(true)

    const [error, setError] = useState('')

    useEffect(() => {
        axios
            .post<{ result: KondorseResult; savedResult?: any }>(
                '/calculations/kondorse',
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
                        Матрица оценок:
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
                        Альтернатива Кондорсе: {data.result.best}
                    </div>
                </div>
            )}
            {error && <p className="error">{error}</p>}
        </div>
    )
}

export default Kondorse
