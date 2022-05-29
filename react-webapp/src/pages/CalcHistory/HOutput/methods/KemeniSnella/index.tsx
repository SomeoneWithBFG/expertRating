import { KemeniSnellaResult } from '../../../../../dataTypes/resultTypes'
import styles from './styles.module.scss'


const KemeniSnellaH = (result: KemeniSnellaResult) => {

    return (
        <div className={styles.container}>
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
        </div>
    )
}

export default KemeniSnellaH
