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

    function text() {
        var text = []
        var i = 0
        switch (state.calculations.method) {
            case 'sequentiallyComparison':
                return ['Название', 'Вес']
            case 'weighing':
                for (i = 0; i < state.calculations.x; i++) {
                    text.push('Z' + i)
                }
                text[0] = 'R'
                return text
            default:
                for (i = 0; i < state.calculations.x; i++) {
                    text.push('Z' + (i + 1))
                }
                return text
        }
    }

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
                                {(state.calculations.method !==
                                    'sequentiallyComparison' ? 'Э' : 'Z') + (i + 1)}
                            </div>
                        ) : (
                            <div key={i} className={styles.rowName}>
                                {(state.calculations.method !==
                                    'sequentiallyComparison' ? 'Э' : 'Z') + (i + 1)}
                            </div>
                        )
                    )}
                </div>
                <div className={styles.row}>
                    {inputField.map((row, i) => (
                        <div key={row[i]}>
                            {text()[i]}
                            {row.map((col, j) => (
                                <div key={col} className={styles.inputElement}>
                                    <Input
                                        key={state.calculations.method + i + j}
                                        name={col}
                                        placeholder={col}
                                        disabled={
                                            state.calculations.method ===
                                                'pairComparsion' && i === j
                                        }
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
