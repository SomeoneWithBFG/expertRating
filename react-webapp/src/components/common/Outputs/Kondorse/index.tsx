import React from 'react'

import { KondorseResult } from '../../../../dataTypes/resultTypes'

import styles from './styles.module.scss'
import { useCalculationRequest } from '../../../../hooks/useCalculationRequest'

interface props {
    setResult: React.Dispatch<React.SetStateAction<{}>>
}

const Kondorse: React.FC<props> = ({ setResult }) => {
    const { result, loading, error } =
        useCalculationRequest<KondorseResult>('kondorse')

    if (error === '') {
        setResult(result)
    }

    return (
        <div className={styles.container}>
            {!loading && error === '' && (
                <div className={styles.outputField}>
                    <div className={styles.dataContainer}>
                        Матрица оценок:
                        {result.modMatrix.map((row, rowIndex) => (
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
                        Альтернатива Кондорсе: {result.best}
                    </div>
                </div>
            )}
            {error && <p className="error">{error}</p>}
        </div>
    )
}

export default Kondorse
