import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

import axios from 'axios'

import styles from './styles.module.scss'

import Input from '../../components/basic/Input'
import Button from '../../components/basic/Button'

const Login: React.FC = () => {
    const history = useHistory()

    const [isPassword, setIsPassword] = useState(true)

    const [login, setLogin] = useState('')

    const [password, setPassword] = useState('')

    const [error, setError] = useState('')

    function singIn() {
        axios
            .post(
                'http://localhost:3000/api/auth/login',
                {
                    login, password
                }
            )
            .then((response) => {
                if (response.data.accessToken && response.data.refreshToken && response.data.expires_in) {
                    localStorage.setItem('accessToken', response.data.accessToken)
                    localStorage.setItem('refreshToken', response.data.refreshToken)
                    localStorage.setItem('expires_in', response.data.expires_in)
                    history.push('/')
                }
                else if (response.data.type === 'error'){
                    setError(response.data.text)
                }
                else {
                    setError('Something went wrong')
                }
            })
            .catch((ex) => {
                setError(ex)
            })
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.bigRectangle}>
                <div className={styles.smallRectangle}>
                    <div className={styles.input}>
                        Логин
                        <Input 
                            name="login"
                            placeholder="Введите логин"
                            onChange={(e)=>{setLogin(e.target.value)}}
                        />
                    </div>
                    <div className={styles.input}>
                        Пароль
                        <Input 
                            name="password"
                            isPassword={isPassword}
                            placeholder="Введите пароль"
                            onChange={(e)=>{setPassword(e.target.value)}}
                        />
                        <div className={styles.showPassword} onClick={()=>setIsPassword(!isPassword)}>
                            показать пароль
                        </div>
                    </div>
                    <div className={styles.button}>
                        <Button 
                            name={'signIn'}
                            placeholder={"Войти"}
                            disabled={false}
                            onClick={singIn}
                        />
                    </div>
                    {error !== '' && (
                        <div className={styles.error}>
                            {error}
                        </div>
                    )}
                </div>
                <div className={styles.icon} /> 
            </div>
        </div>
    )
}

export default Login
