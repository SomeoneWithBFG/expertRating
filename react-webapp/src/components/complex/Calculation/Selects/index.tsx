import React from 'react'

import Select from '../../../basic/Select'

import { useAppDispatch, useAppSelector } from '../../../../redux/hooks'
import {
    setMethod,
    setMethodPairComp,
    setMethodSeqComp,
    setSizeX,
    setSizeY,
    setSizeYSeqComp,
} from '../../../../redux/calculations/actions'

import styles from './styles.module.scss'

import { types, size } from './data'

const Selects: React.FC = () => {
    const state = useAppSelector((state) => state)
    const dispatch = useAppDispatch()

    const isPairComparsion = state.calculations.method === 'pairComparsion'
    const isSequentiallyComparison =
        state.calculations.method === 'sequentiallyComparison'

    const handleMethodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value === 'pairComparsion') {
            dispatch(setMethodPairComp(e.target.value))
        } else if (e.target.value === 'sequentiallyComparison') {
            dispatch(setMethodSeqComp(e.target.value))
        } else {
            dispatch(setMethod(e.target.value))
        }
    }

    function handleXChange(e: React.ChangeEvent<HTMLSelectElement>) {
        dispatch(setSizeX(parseInt(e.target.value)))
        if (isPairComparsion) {
            dispatch(setSizeY(parseInt(e.target.value)))
        }
    }

    function handleYChange(e: React.ChangeEvent<HTMLSelectElement>) {
        if (isSequentiallyComparison) {
            dispatch(setSizeYSeqComp(parseInt(e.target.value)))
        } else {
            dispatch(setSizeY(parseInt(e.target.value)))
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.typeOfCalc}>
                <Select
                    name={'typeSelector'}
                    disabled={false}
                    options={types}
                    onChange={handleMethodChange}
                />
            </div>
            <div className={styles.size}>
                <div className={styles.sizeElement}>Размерность матрицы:</div>
                <div className={styles.sizeElement}>
                    X:
                    <Select
                        name={'typeSelector'}
                        disabled={isSequentiallyComparison}
                        options={size}
                        onChange={handleXChange}
                    />
                </div>
                <div className={styles.sizeElement}>
                    Y:
                    <Select
                        name={'typeSelector'}
                        disabled={isPairComparsion}
                        options={size}
                        onChange={handleYChange}
                    />
                </div>
            </div>
        </div>
    )
}

export default Selects
