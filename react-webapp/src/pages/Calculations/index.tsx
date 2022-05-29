import React from 'react'
import styles from './styles.module.scss'

import Inputs from '../../components/complex/Calculation/Inputs'
import Output from '../../components/complex/Calculation/Output'
import Selects from '../../components/complex/Calculation/Selects'
import Button from '../../components/basic/Button'
import { useHistory } from 'react-router-dom'

const Calculations: React.FC = () => {
    const history = useHistory()
    function singOut() {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        localStorage.removeItem('expires_in')
        history.push('/login')
    }
    function historyClick() {
        history.push('/calc-history')
    }
    return (
        <div className={styles.pageContainer}>
            <div className={styles.data}>
                <div className={styles.logoutButton}>
                    <Button 
                        name='Exit' 
                        onClick={singOut} 
                        disabled={false} 
                        placeholder={localStorage.getItem('accessToken') ? 'Выйти' : 'Войти'}
                    />
                </div>
                <div className={styles.historyButton}>
                    <Button 
                        name='Exit' 
                        onClick={historyClick} 
                        disabled={false} 
                        placeholder='История'
                    />
                </div>
                <Selects />
                <Inputs />
                <Output />
            </div>
        </div>
    )
}

export default Calculations
