/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import jwt_decode from "jwt-decode"
import axios from 'axios'
import styles from './styles.module.scss'
import Button from '../../components/basic/Button'
import { useHistory } from 'react-router-dom'
import Collapsible from 'react-collapsible';
import HOutput from './HOutput'

const CalcHistory: React.FC = () => {
    const history = useHistory()
    function singOut() {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        localStorage.removeItem('expires_in')
        history.push('/login')
    }
    function historyClick() {
        history.push('/')
    }
    const [data, setData] = useState([] as Array<Record<string, any>>)

    //@ts-ignore
    useEffect(async () => {
        const fetchData = async () => {
            if(localStorage.getItem('accessToken')) {
                const res = await axios.get(
                    `http://localhost:3000/api/calculations/user/${(jwt_decode(localStorage.getItem('accessToken') || '') as Record<string, any>).id}`, 
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        }
                    }
                );
                setData(res.data)
            }
        }
        fetchData()
    }, []);


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
                <div className={styles.calcButton}>
                    <Button 
                        name='Exit' 
                        onClick={historyClick} 
                        disabled={false} 
                        placeholder='Вычисления'
                    />
                </div>
                <div className={styles.container}>
                    <div className={styles.container2}>
                        {data.length === 0 && 'Войдите в Ваш аккаун, чтобы видеть историю вычислений'}
                        {data.map((item: Record<string, any>) => (
                            <>
                                <Collapsible trigger={`${item.method} (${item.id})`} key={item.id}>
                                    <HOutput {...item} />
                                </Collapsible>
                                <br/>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CalcHistory
