import React from 'react'

import Select from '../../../basic/Select'

import styles from './styles.module.scss'

import { types, size } from './data'

function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    console.log(e.target.value)
}

const Selects: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.typeOfCalc}>
                <Select
                    name={'typeSelector'}
                    disabled={false}
                    options={types}
                    onChange={handleChange}
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
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.sizeElement}>
                    Y: 
                    <Select
                        name={'typeSelector'}
                        disabled={false}
                        options={size}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    )
}

export default Selects
