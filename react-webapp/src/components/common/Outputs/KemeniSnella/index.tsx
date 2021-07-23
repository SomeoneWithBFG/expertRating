import React from 'react'

import { useAppSelector } from '../../../../redux/hooks'

import axios from 'axios'

import styles from './styles.module.scss'

import { KemeniSnellaResult } from '../mocked'

const KemeniSnella: React.FC = () => {
    const state = useAppSelector((state) => state)

    async function getData() {
        const data = (await axios.post('/calculations/kemeni-snella', {inputMatrix: state.calculations.commonMatrix, x: state.calculations.x, y: state.calculations.y})).data
        console.log(data)
        return data
    }    
    getData()
    const data = KemeniSnellaResult
    return (
        <div className={styles.container}>
            <div className={styles.outputField}>
                <div className={styles.dataContainer}>
                    {data.result.binaryMatrixArray.map((matrix, j) => (
                        <>
                            {'Эксперт ' + (j + 1) + ':'}
                            {matrix.map((row, i) => (
                                <div key={row[i]} className={styles.row}>
                                    {row.map((col, k) => (
                                        <div
                                            key={""+i+j+k+col}
                                            className={styles.matrixElement}
                                        >
                                            {col}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </>
                    ))}
                </div>

                <div className={styles.dataContainer}>
                    Матрица потерь:
                    {data.result.looseMatrix.map((row, i) => (
                        <div key={row[i]} className={styles.row}>
                            {row.map((col, j) => (
                                <div
                                    key={""+i+j+col}
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
                    <div>{data.result.order}</div>
                </div>
            </div>
        </div>
    )
}

export default KemeniSnella
