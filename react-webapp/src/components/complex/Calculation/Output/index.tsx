import React from 'react'
import styles from './styles.module.scss'

import Button from '../../../basic/Button'

import KemeniSnella from '../../../common/Outputs/KemeniSnella/'
import Kondorse from '../../../common/Outputs/Kondorse/'
import PairComparsion from '../../../common/Outputs/PairComparsion/'
import Preference from '../../../common/Outputs/Preference/'
import SequentiallyComparison from '../../../common/Outputs/SequentiallyComparsion/'
import Weighing from '../../../common/Outputs/Weighing/'

const chooseMethod = () => {
    const method = () => {
        return 'Weighing'
    }
    switch (method()) {
        case 'KemeniSnella':
            return <KemeniSnella />
        case 'Kondorse':
            return <Kondorse />
        case 'PairComparsion':
            return <PairComparsion />
        case 'Preference':
            return <Preference />
        case 'SequentiallyComparison':
            return <SequentiallyComparison />
        case 'Weighing':
            return <Weighing />
        default:
            return <> </>
    }
}

const Output: React.FC = () => {
    return (
        <div className={styles.container}>
            {chooseMethod()}
            <div className={styles.downloadButton}>
                <Button
                    name={'Скачать решение'}
                    placeholder={'Скачать решение'}
                    disabled={false}
                    onClick={(e) => console.log(e.target)}
                />
            </div>
        </div>
    )
}

export default Output
