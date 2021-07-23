import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'

import { useAppSelector } from '../../../../redux/hooks'

import { PairComparsionResult } from '../resultTypes'

const PairComparsion: React.FC = () => {
    const state = useAppSelector((state) => state)

    const [data, setData] = useState({
        result: {} as PairComparsionResult,
    })

    const [loading, setLoading] = useState(true)

    const [error, setError] = useState('')

    useEffect(() => {
        axios
            .post<{ result: PairComparsionResult; savedResult?: any }>(
                '/calculations/pair-comparsion',
                {
                    binaryMatrix: state.calculations.commonMatrix,
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
            )}
            {error && <p className="error">{error}</p>}
        </div>
    )
}

export default PairComparsion
