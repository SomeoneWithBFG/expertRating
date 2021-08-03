import React from 'react'
import styles from './styles.module.scss'

import Inputs from '../../components/complex/Calculation/Inputs'
import Output from '../../components/complex/Calculation/Output'
import Selects from '../../components/complex/Calculation/Selects'

const Calculations: React.FC = () => {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.data}>
                <Selects />
                <Inputs />
                <Output />
            </div>
        </div>
    )
}

export default Calculations
