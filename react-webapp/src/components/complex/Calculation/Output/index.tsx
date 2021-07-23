import React, { useState } from 'react'
import styles from './styles.module.scss'

import { useAppSelector } from '../../../../redux/hooks'

import Button from '../../../basic/Button'

import KemeniSnella from '../../../common/Outputs/KemeniSnella/'
import Kondorse from '../../../common/Outputs/Kondorse/'
import PairComparsion from '../../../common/Outputs/PairComparsion/'
import Preference from '../../../common/Outputs/Preference/'
import SequentiallyComparison from '../../../common/Outputs/SequentiallyComparsion/'
import Weighing from '../../../common/Outputs/Weighing/'

const chooseMethod = (method: string) => {
    switch (method) {
        case 'kemeniSnella':
            return <KemeniSnella />
        case 'kondorse':
            return <Kondorse />
        case 'pairComparsion':
            return <PairComparsion />
        case 'preference':
            return <Preference />
        case 'sequentiallyComparison':
            return <SequentiallyComparison />
        case 'weighing':
            return <Weighing />
        default:
            return <> </>
    }
}

const Output: React.FC = () => {
    const state = useAppSelector((state) => state)

    const [isCalculated, setIsCalculated] = useState(false)

    function calculate() {
        setIsCalculated(!isCalculated)
    }

    return (
        <div className={styles.container}>
            <div className={styles.button}>
                <Button
                    name={isCalculated ? 'Отменить' : 'Рассчитать'}
                    placeholder={isCalculated ? 'Отменить' : 'Рассчитать'}
                    buttonType={isCalculated ? 'danger' : 'basic'}
                    disabled={false}
                    onClick={calculate}
                />
            </div>
            {isCalculated && (
                <div>
                    {chooseMethod(state.calculations.method)}
                    <div className={styles.button}></div>
                </div>
            )}
            <div className={styles.button}>
                <Button
                    name={'Скачать решение'}
                    placeholder={'Скачать решение'}
                    disabled={!isCalculated}
                    onClick={(e) => console.log(e.target)}
                />
            </div>
        </div>
    )
}

export default Output
