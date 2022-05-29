/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'

const CalcHistory: React.FC = () => {
    const [data, setDeta] = useState({} as Record<string, any>)
    const [error, setError] = useState({} as Error)

    const id = 'b9ef266b-6548-4691-95d9-cd42b7c7fac6'
    //@ts-ignore
    useEffect(async () => {
        const fetchData = async () => {
            const res = await axios.get(
                `http://localhost:3000/api/calculations/${id}`, 
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                }
            );
            if (res.data?.code !== 200) {
                setError(new Error('Can\'t get data'))
                return
            }
            setDeta(res.data)
        }
        fetchData()
    }, []);
    
    return  (
        <div className={styles.pageContainer}>
            <div className={styles.data}>
                ok
            </div>
        </div>
    )
}

export default CalcHistory
