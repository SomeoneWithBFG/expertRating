import React from 'react'
import styles from './styles.module.scss'

import { useCalculationRequest } from '../../../../hooks/useCalculationRequest'
import { endpoints } from '../../../../api/calculations'

import { KondorseResult } from '../../../../dataTypes/resultTypes'

interface props {
    setResult: React.Dispatch<React.SetStateAction<{}>>
}

const Kondorse: React.FC<props> = ({ setResult }) => {
    const { result, loading, error } = useCalculationRequest<KondorseResult>(
        endpoints.kondorse
    )

    if (!error) {
        setResult(result)
    }

    return (
        <div className={styles.container}>
            {!loading && !error && (
                <div className={styles.outputField}>
                    <div className={styles.dataContainer}>
                        Матрица оценок:
                        {result.modMatrix.map((row, rowIndex) => (
                            <div key={rowIndex} className={styles.row}>
                                {row.map((col, colIndex) => (
                                    <div
                                        key={colIndex}
                                        className={styles.matrixElement}
                                    >
                                        {col + ' '}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                    <div className={styles.dataContainer}>
                        Альтернатива Кондорсе: {result.best}
                    </div>
                </div>
            )}
            {error && <p className="error">{error}</p>}
        </div>
    )
}

export default Kondorse
