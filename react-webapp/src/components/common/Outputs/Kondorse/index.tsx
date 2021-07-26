import React, { useEffect, useState } from 'react'

import { useAppSelector } from '../../../../redux/hooks'

import { kondorse } from '../../../../api/calculations'

import { KondorseResult } from '../../../../dataTypes/resultTypes'

import styles from './styles.module.scss'

const Kondorse: React.FC = () => {
    const state = useAppSelector((state) => state)

    const [data, setData] = useState({
        result: {} as KondorseResult,
    })

    const [loading, setLoading] = useState(true)

    const [error, setError] = useState('')

    useEffect(() => {
        kondorse(
            state.calculations.commonMatrix,
            state.calculations.x,
            state.calculations.y
        )
            .then((response) => {
                if (response.type === 'error') {
                    setError(response.payload)
                } else {
                    setData(response.payload)
                }
                setLoading(false)
            })
            .catch((ex) => {
                setError('Something went wrong')
                setLoading(false)
            })
    })

    return (
        <div className={styles.container}>
            {!loading && error === '' && (
                <div className={styles.outputField}>
                    <div className={styles.dataContainer}>
                        Матрица оценок:
                        {data.result.modMatrix.map((row, rowIndex) => (
                            <div key={row[rowIndex]} className={styles.row}>
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
