import React from 'react'

import Input from '../../../basic/Input'

import { useAppDispatch, useAppSelector } from '../../../../redux/hooks'
import {
    setMatrixElement,
    setMatrixElementSeqCompIndex,
    setMatrixElementSeqCompWeight,
} from '../../../../redux/calculations/actions'

import styles from './styles.module.scss'

const Inputs: React.FC = () => {
    const state = useAppSelector((state) => state)
    const dispatch = useAppDispatch()

    function handleInput(data: string, x: number, y: number) {
        if (state.calculations.method === 'sequentiallyComparison') {
            let newMatrix = JSON.parse(
                JSON.stringify(state.calculations.seqCompMatrix)
            )
            if (x === 0) {
                newMatrix[y].index = data
                dispatch(setMatrixElementSeqCompIndex(newMatrix))
            }
            if (x === 1) {
                newMatrix[y].weight = parseFloat(data)
                dispatch(setMatrixElementSeqCompWeight(newMatrix))
            }
        } else {
            let newMatrix = JSON.parse(
                JSON.stringify(state.calculations.commonMatrix)
            )
            newMatrix[y][x] = parseFloat(data)
            dispatch(setMatrixElement(newMatrix))
        }
    }

    const inputField = new Array<Array<string>>(state.calculations.x)
    for (var i = 0; i < state.calculations.x; i++) {
        inputField[i] = new Array<string>(state.calculations.y)
        for (var j = 0; j < state.calculations.y; j++) {
            inputField[i][j] = '' + (j + 1) + '-' + (i + 1)
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.inputField}>
                <div className={styles.rowNameContainer}>
                    {inputField[0].map((row, i) =>
                        i === 0 ? (
                            <div key={i} className={styles.firstRowName}>
                                k
                            </div>
                        ) : (
                            <div key={i} className={styles.rowName}>
                                k
                            </div>
                        )
                    )}
                </div>
                <div className={styles.row}>
                    {inputField.map((row, i) => (
                        <div key={row[i]}>
                            f
                            {row.map((col, j) => (
                                <div key={col} className={styles.inputElement}>
                                    <Input
                                        key={'' + i + ' ' + j}
                                        name={col}
                                        placeholder={col}
                                        onChange={(
                                            e: React.ChangeEvent<HTMLInputElement>
                                        ) => {
                                            handleInput(e.target.value, i, j)
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Inputs
