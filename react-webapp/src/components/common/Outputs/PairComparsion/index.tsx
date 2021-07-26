import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'

import { useAppSelector } from '../../../../redux/hooks'

import { pairComparsion } from '../../../../api/calculations'

import { PairComparsionResult } from '../../../../dataTypes/resultTypes'

const PairComparsion: React.FC = () => {
    const state = useAppSelector((state) => state)

    const [data, setData] = useState({
        result: {} as PairComparsionResult,
    })

    const [loading, setLoading] = useState(true)

    const [error, setError] = useState('')

    useEffect(() => {
        pairComparsion(
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
