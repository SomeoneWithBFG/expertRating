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

import download from '../../../../services/downloadSolution'

const Output: React.FC = () => {
    const state = useAppSelector((state) => state)

    const [isCalculated, setIsCalculated] = useState(false)

    const [result, setResult] = useState({})

    const chooseMethod: { [key: string]: any } = {
        kemeniSnella: <KemeniSnella setResult={setResult} />,
        kondorse: <Kondorse setResult={setResult} />,
        pairComparsion: <PairComparsion setResult={setResult} />,
        preference: <Preference setResult={setResult} />,
        sequentiallyComparison: (
            <SequentiallyComparison setResult={setResult} />
        ),
        weighing: <Weighing setResult={setResult} />,
        default: <> Something went wrong </>,
    }

    function calculate() {
        setIsCalculated(!isCalculated)
    }

    function handleDownloadClick() {
        download(result, state.calculations.method)
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
                    {chooseMethod[state.calculations.method || 'default']}
                    <div className={styles.button}></div>
                </div>
            )}
            <div className={styles.button}>
                <Button
                    name={'Скачать решение'}
                    placeholder={'Скачать решение'}
                    disabled={!isCalculated}
                    onClick={handleDownloadClick}
                />
            </div>
        </div>
    )
}

export default Output
