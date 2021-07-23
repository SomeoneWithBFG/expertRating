import React, { useMemo } from 'react'
import debounce from 'lodash.debounce'

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
        switch (state.calculations.method) {
            case 'sequentiallyComparison':
                return ['Название', 'Вес']
            case 'weighing':
                var arr = []
                for (var i = 0; i < state.calculations.x; i++) {
                    arr.push('Z' + i)
                }
                arr[0] = 'R'
                return arr
            default:
                var arr = []
                for (var i = 0; i < state.calculations.x; i++) {
                    arr.push('Z' + (i + 1))
                }
                return arr
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
                newMatrix[y].weight = parseFloat(data + '.005')
                dispatch(setMatrixElementSeqCompWeight(newMatrix))
            }
        } else {
            let newMatrix = JSON.parse(
                JSON.stringify(state.calculations.commonMatrix)
            )
            //
            newMatrix[y][x] = parseFloat(data)
            dispatch(setMatrixElement(newMatrix))
        }
    }

    function setInputValue(i: number, j: number) {
        //console.log(state.calculations.commonMatrix[j][i])
        if (state.calculations.method === 'sequentiallyComparison') {
            if (i === 0) {
                if (state.calculations.seqCompMatrix[j].index !== '') {
                    return state.calculations.seqCompMatrix[j].index
                }
                return
            }
            return state.calculations.seqCompMatrix[j].weight.toString()
        }
        if (state.calculations.commonMatrix[j][i].toString() === 'NaN') {
            return
        }
        return state.calculations.commonMatrix[j][i].toString()
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
                                {state.calculations.method !==
                                    'sequentiallyComparison' && 'Э' + (i + 1)}
                            </div>
                        ) : (
                            <div key={i} className={styles.rowName}>
                                {state.calculations.method !==
                                    'sequentiallyComparison' && 'Э' + (i + 1)}
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
                                        key={setInputValue(i, j) + '' + i + j}
                                        name={col}
                                        placeholder={col}
                                        value={setInputValue(i, j)}
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
