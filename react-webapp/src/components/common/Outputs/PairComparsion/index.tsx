import React from 'react'
import styles from './styles.module.scss'

import { useCalculationRequest } from '../../../../hooks/useCalculationRequest'
import { endpoints } from '../../../../api/calculations'

import { PairComparsionResult } from '../../../../dataTypes/resultTypes'

interface props {
    setResult: React.Dispatch<React.SetStateAction<{}>>
}

const PairComparsion: React.FC<props> = ({ setResult }) => {
    const { result, loading, error } =
        useCalculationRequest<PairComparsionResult>(endpoints.pairComparsion)

    if (!error) {
        setResult(result)
    }

    return (
        <div className={styles.container}>
            {!loading && !error && (
                <div className={styles.outputField}>
                    <div className={styles.dataContainer}>
                        Цена каждой цели:
                        {result.values.map((col, colIndex) => (
                            <div
                                key={colIndex}
                                className={styles.matrixElement}
                            >
                                {colIndex + 1 + ': ' + col + ' '}
                            </div>
                        ))}
                    </div>

                    <div className={styles.dataContainer}>
                        Сумма цен: {result.sumOfValues}
                    </div>

                    <div className={styles.dataContainer}>
                        Исковые веса целей:
                        {result.weights.map((col, colIndex) => (
                            <div
                                key={colIndex}
                                className={styles.matrixElement}
                            >
                                {colIndex + 1 + ': ' + col + ' '}
                            </div>
                        ))}
                    </div>

                    <div className={styles.dataContainer}>
                        Порядок предпочтения целей:
                        {' | ' + result.order}
                    </div>
                </div>
            )}
            {error && <p className="error">{error}</p>}
        </div>
    )
}

export default PairComparsion
