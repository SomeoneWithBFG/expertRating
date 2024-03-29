import React from 'react'
import styles from './styles.module.scss'

import { useCalculationRequest } from '../../../../hooks/useCalculationRequest'
import { endpoints } from '../../../../api/calculations'

import { KemeniSnellaResult } from '../../../../dataTypes/resultTypes'

interface props {
    setResult: React.Dispatch<React.SetStateAction<{}>>
}

const KemeniSnella: React.FC<props> = ({ setResult }) => {
    const { result, loading, error } =
        useCalculationRequest<KemeniSnellaResult>(endpoints.kemeniSnella)

    if (!error) {
        setResult(result)
    }

    return (
        <div className={styles.container}>
            {!loading && !error && (
                <div className={styles.outputField}>
                    <div className={styles.dataContainer}>
                        {result.binaryMatrixArray.map((matrix, matrixIndex) => (
                            <div key={matrixIndex}>
                                {'Эксперт ' + (matrixIndex + 1) + ':'}
                                {matrix.map((row, rowIndex) => (
                                    <div key={rowIndex} className={styles.row}>
                                        {row.map((col, columnIndex) => (
                                            <div
                                                key={columnIndex}
                                                className={styles.matrixElement}
                                            >
                                                {col}
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className={styles.dataContainer}>
                        Матрица потерь:
                        {result.looseMatrix.map((row, rowIndex) => (
                            <div key={rowIndex} className={styles.row}>
                                {row.map((col, columnIndex) => (
                                    <div
                                        key={columnIndex}
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
                        <div>{result.order}</div>
                    </div>
                </div>
            )}
            {error && <p className="error">{error}</p>}
        </div>
    )
}

export default KemeniSnella
