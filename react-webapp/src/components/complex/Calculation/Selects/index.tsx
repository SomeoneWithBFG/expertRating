import React from 'react'

import Select from '../../../basic/Select'

import { useAppDispatch, useAppSelector } from '../../../../redux/hooks'

import styles from './styles.module.scss'

import { types, size } from './data'

import { setMethod, setX, setY } from '../../../../redux/calculations/actions'

const Selects: React.FC = () => {
    const state = useAppSelector((state) => state)

    const dispatch = useAppDispatch()

    const handleMethodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setMethod(e.target.value))
    }

    function handleXChange(e: React.ChangeEvent<HTMLSelectElement>) {
        dispatch(setX(parseInt(e.target.value)))
    }

    function handleYChange(e: React.ChangeEvent<HTMLSelectElement>) {
        dispatch(setY(parseInt(e.target.value)))
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
                        disabled={false}
                        options={size}
                        onChange={handleXChange}
                    />
                </div>
                <div className={styles.sizeElement}>
                    Y:
                    <Select
                        name={'typeSelector'}
                        disabled={false}
                        options={size}
                        onChange={handleYChange}
                    />
                </div>
            </div>
        </div>
    )
}

export default Selects
