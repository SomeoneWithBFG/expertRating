import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'

import { useAppSelector } from '../../../../redux/hooks'

import { weighing } from '../../../../api/calculations'

import { WeighingResult } from '../../../../dataTypes/resultTypes'

const Weighing: React.FC = () => {
    const state = useAppSelector((state) => state)

    const [data, setData] = useState({
        result: {} as WeighingResult,
    })

    const [loading, setLoading] = useState(true)

    const [error, setError] = useState('')

    useEffect(() => {
        weighing(
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
                        Сумма оценок экспертов:
                        {' ' + data.result.sumOfMarks}
                    </div>

                    <div className={styles.dataContainer}>
                        Относительные оценки экспертов:
                        {data.result.relativeExpertsMarks.map((col, colIndex) => (
                            <div key={col} className={styles.matrixElement}>
                                {'' + (colIndex + 1) + ': ' + col + ' '}
                            </div>
                        ))}
                    </div>

                    <div className={styles.dataContainer}>
                        Искомые веса:
                        {data.result.weights.map((col, colIndex) => (
                            <div key={col} className={styles.matrixElement}>
                                {'' + (colIndex + 1) + ': ' + col + ' '}
                            </div>
                        ))}
                    </div>

                    <div className={styles.dataContainer}>
                        Порядок предпочтения целей: {data.result.order}
                    </div>
                </div>
            )}
            {error && <p className="error">{error}</p>}
        </div>
    )
}

export default Weighing
