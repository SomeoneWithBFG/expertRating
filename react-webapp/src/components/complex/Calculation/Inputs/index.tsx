import React, { useMemo } from 'react'

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

    let text = useMemo(() => {
        let text = []
        let index = 0
        if (state.calculations.method === 'sequentiallyComparison')
            return ['Название', 'Вес']
        if (state.calculations.method === 'weighing') {
            for (index = 0; index < state.calculations.x; index++) {
                text.push('Z' + index)
            }
            text[0] = 'R'
            return text
        }
        for (index = 0; index < state.calculations.x; index++) {
            text.push('Z' + (index + 1))
        }
        return text
    }, [state.calculations.method, state.calculations.x])

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
    for (let colIndex = 0; colIndex < state.calculations.x; colIndex++) {
        inputField[colIndex] = new Array<string>(state.calculations.y)
        for (let rowIndex = 0; rowIndex < state.calculations.y; rowIndex++) {
            inputField[colIndex][rowIndex] = '' + (rowIndex + 1) + '-' + (colIndex + 1)
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.inputField}>
                <div className={styles.rowNameContainer}>
                    {inputField[0].map((row, rowIndex) =>
                        rowIndex === 0 ? (
                            <div key={rowIndex} className={styles.firstRowName}>
                                {(state.calculations.method !==
                                'sequentiallyComparison'
                                    ? 'Э'
                                    : 'Z') +
                                    (rowIndex + 1)}
                            </div>
                        ) : (
                            <div key={rowIndex} className={styles.rowName}>
                                {(state.calculations.method !==
                                'sequentiallyComparison'
                                    ? 'Э'
                                    : 'Z') +
                                    (rowIndex + 1)}
                            </div>
                        )
                    )}
                </div>
                <div className={styles.row}>
                    {inputField.map((row, rowIndex) => (
                        <div key={rowIndex}>
                            {text[rowIndex]}
                            {row.map((col, colIndex) => (
                                <div key={col} className={styles.inputElement}>
                                    <Input
                                        key={
                                            state.calculations.method +
                                            rowIndex +
                                            colIndex
                                        }
                                        name={col}
                                        placeholder={col}
                                        disabled={
                                            state.calculations.method ===
                                                'pairComparsion' &&
                                            rowIndex === colIndex
                                        }
                                        onChange={(
                                            e: React.ChangeEvent<HTMLInputElement>
                                        ) => {
                                            handleInput(
                                                e.target.value,
                                                rowIndex,
                                                colIndex
                                            )
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
